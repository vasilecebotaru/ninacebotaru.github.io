const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000;

const app = express();

app.use('/static', express.static(path.join(__dirname, "dist")));


// app.get("/contactes", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "_static", "views", "contact.html"));
// });
// app.get("/porto", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "_static", "views", "portofoliu.html"));
// });
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});