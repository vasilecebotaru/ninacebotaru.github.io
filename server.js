require("dotenv").config();
const express = require("express");
const path = require("path");
const passport = require("passport");
const passportInit = require("./server/passport-config.js");
const session = require("express-session");
const mongoSessionStore = require("connect-mongo");
const flash = require("express-flash");
const bcrypt = require("bcryptjs");
const port = process.env.PORT || 3000;
const {connectDB, dbClient} = require("./server/connectDB.js");
const { ObjectId } = require("mongodb");
// const nodemailer = require("nodemailer");
const smtpTransporter = require("./server/smtpTransporter.js");

const app = express();

passportInit(passport, async (username) => {
        const user = await dbClient.db("lifeCoachDB").collection("adminUsers").findOne({username: username});
        // console.log("auth - found user by username in db");
        return user;
    },
    async (id) => {
        const objId = new ObjectId(id);
        const user =  await dbClient.db("lifeCoachDB").collection("adminUsers").findOne({_id: objId});
        // console.log("auth - found user by id in db");
        return user;
    }
);
connectDB();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "adminViews"));
app.use('/static', express.static(path.join(__dirname, "dist")));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 24*60*60*1000},
    store: mongoSessionStore.create({
        mongoUrl: process.env.MONGO_URI,
        ttl: 24 * 60 * 60
    })
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


//custom middleware
function checkAuth(req, res, next){
	if(req.isAuthenticated()){
        // console.log("is auth");
		return next();
	}
	res.redirect('/admin/login');
}
function checkNotAuth(req, res, next){
	if(req.isAuthenticated()){
        // console.log("is not auth");
		return res.redirect('/admin/dashboard');
	}
	next();
}

// app.get("/contactes", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "_static", "views", "contact.html"));
// });
// app.get("/porto", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "_static", "views", "portofoliu.html"));
// });

//===================================admin routes -----should move in a separate router

app.get('/admin/login', checkNotAuth, (req, res) => {
    // console.log(req.session);
    res.render('adminLogin');
});

app.post('/admin/login', checkNotAuth, passport.authenticate('local', {
    successRedirect: '/admin/dashboard',
    failureRedirect: '/admin/login',
    failureFlash: true
}));

app.get('/logout',checkAuth, (req, res) => {
    req.logOut((err) => {
		if (err) { return next(err); }
		res.redirect('/admin/login');
	  });
});

app.get('/admin/dashboard', checkAuth, (req, res) => {
    res.render("adminDashboard", {users: [], cancelledUsers: [], servedUsers: [], host: process.env.HOST});
})

//get all users
app.get('/api/users', checkAuth, async (req, res) => {
    const usersCollection = dbClient.db("lifeCoachDB").collection('users');
    const cursor = usersCollection.find();
    const usersArr = await cursor.toArray();

    const activeUsers = usersArr.filter(user => user.cancelled !== true && user.served !== true);
    const cancelledUsers = usersArr.filter(user => user.cancelled === true);
    const servedUsers = usersArr.filter(user => user.served === true)

    res.render("adminDashboard", {users: activeUsers, cancelledUsers, servedUsers, host: process.env.HOST});
});


app.patch('/api/users', checkAuth, async (req, res) => {
    const id = req.body._id;
    const usersCollection = dbClient.db("lifeCoachDB").collection("users");
    
    // let currentDate = new Date();

    // let dateOptions = {
    // year: 'numeric',
    // month: 'short', //3 litere
    // day: 'numeric',
    // hour: 'numeric',
    // minute: 'numeric',
    // hour12: false, //format de 24 de ore
    // };

    // let formattedDate = currentDate.toLocaleString('ro-RO', dateOptions);

    if(req.body.action === "cancel"){
        try{
            await usersCollection.findOneAndUpdate({_id: new ObjectId(id)}, {$set: {cancelled: true, dateCancelled: new Date()}}, {upsert: true});
            return res.sendStatus(200);
        } catch (err){
            console.log(err);
            return res.sendStatus(500);
        }
    } else if(req.body.action === "serve"){
        try {
            await usersCollection.findOneAndUpdate({_id: new ObjectId(id)}, {$set: {served: true, dateServed: new Date()}}, {upsert: true});
            return res.sendStatus(200);
        } catch (err) {
            console.log(err);
            return res.sendStatus(500);
        }
    }
});

//===================================DEV ROUTES=====================

app.post('/dev/addUser', async (req, res) => {
    const username = req.body.username;
    const password = await bcrypt.hash(req.body.password, 10);

    try{
        await dbClient.db("lifeCoachDB").collection("adminUsers").insertOne({username, password});
        return res.send('new user added ez gg');
    } catch (err) {
        res.send(`error on addUser ${err}`);
    }
});

//===================================user routes===============================

app.post('/submit', async (req, res) => {
    const name = req.body.name;
    const tel = req.body.tel;

    const usersCollection = dbClient.db("lifeCoachDB").collection('users');

    try{
        await usersCollection.insertOne({
            fullName: name,
            telephone: tel,
            dateSigned: new Date(),
            served: false,
            cancelled: false
        });

        // async..await is not allowed in global scope, must use a wrapper
        // send mail with defined transport object
        const info = await smtpTransporter.sendMail({
            from: `"Robotul Life Coach"`, //<${process.env.SENDER}>`, // sender address
            to: process.env.RECIPIENT || "loge.lederun@gmail.com", // list of receivers
            subject: "Client nou", // Subject line
            html: `<h2>Cineva doreste sa beneficieze de serviciile tale.</h2>
            <br>
            <p>Nume si prenume: <b>${req.body.name}</b></p>
            <p>Telefon: <b>${req.body.tel}</b></p>
            <br>
            `
        });
        
        console.log("Message sent: %s", info.messageId);
        return res.send("success");
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
    } catch(err){
        console.log(`Something bad happen: ${err}`)
        return res.send("error")
    }

});


app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});



