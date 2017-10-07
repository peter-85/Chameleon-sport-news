const express = require('express');
let bodyParser = require('body-parser');
const path = require("path");

const port = process.env.PORT || 3000; // for Heroku 
const app = express();



const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('server/data/data.json');
const db = low(adapter);

app.use(bodyParser.json()); // using middleware to parse json in body of the request
app.use(express.static(__dirname + '/../public'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
    //__dirname : It will resolve to your project folder.
});


let newsController = require('./controllers/news-controller')(db);

app.get('/api/news', newsController.getNews);
app.get('/api/news/tennisnews', newsController.getTennisNews);
app.get('/api/news/tennisnews/:id', (req, res, next) => {
    return newsController.getDetailTennisNews(req, res);
});
app.get('/api/news/latestSportNews', newsController.getLatestSportNews);
app.get('/api/getFromBlog', newsController.getRecentFromBlog);
app.get('/api/news/recentPosts', newsController.getRecentPosts);
app.get('/api/news/media', newsController.getMedia);

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});