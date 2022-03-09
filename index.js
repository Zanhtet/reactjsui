const express = require("express");
const app = express();

app.use(express.static(__dirname + '/client/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/client/public/index.html");
});

app.listen(3000);
console.log("Application is running on port 3000");