const express = require("express");
const path = require("path");
const port = process.env.PORT || 8080;

const app = express();

app.use('/static', express.static(process.cwd() + "/static"));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});