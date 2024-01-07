const express = require("express");
const path = require("path");
const port = process.env.PORT || 5000;

const app = express();

app.use('/static', express.static(path.join(__dirname, "_static")));

// app.get("/portofoliu", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "_static", "views", "portofoliu.html"));
// })
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});