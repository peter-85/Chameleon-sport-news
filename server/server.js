const express = require('express');
const path = require("path");

const port = process.env.PORT || 8080; // for Heroku 
const app = express();


app.use(express.static(__dirname + '/../public'));

app.get('/', function(req, res) {
    res.sendFile('index.html');
    //__dirname : It will resolve to your project folder.
});


app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});