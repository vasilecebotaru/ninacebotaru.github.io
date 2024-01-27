const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

function init(passport, getUserByUsername, getUserById){
    const authUser = async (username, password, done) => {
        const adminUser = await getUserByUsername(username);
        if(adminUser == null){
            return done(null, false, {message: "Acest utilizator nu exista."});
        }

        try {
            if(await bcrypt.compare(password, adminUser.password)){
                // console.log("este ok", adminUser);
                return done(null, adminUser);
            } else {
                return done(null, false, {message: "Parola gresita."});
            }
        } catch (err) {
            console.log("auth err", err);
            return done(err);
        }
    }
    passport.use(new LocalStrategy({ usernameField: 'username', passwordField: 'password'}, authUser));
    passport.serializeUser((adminUser, done) => {
        // console.log("serialize ok", adminUser);
        return done(null, adminUser._id)
    });
    passport.deserializeUser(async (id, done) => {
        const u = await getUserById(id);
        // console.log("deserialize ok", u);
        return done(null, u);
    });
}
 module.exports = init;