const { MongoClient, ObjectId } = require('mongodb');

const mlabUrl = 'mongodb://peter_85:fce13382@ds040637.mlab.com:40637/chameleon-final-project-telerik';

const _ = require("lodash");

module.exports = (db) => {
    db.defaults({
            news: [],
            blog: []
        })
        .value();

    // Get
    function getNewsFromDB() {
        return db.get('news').value();
    }

    function getPostsBlogFromDB() {
        return db.get('blog').value();
    }

    function getMediaFromDB() {
        return db.get('media').value();
    }


    function getNews(req, res) {
        const news = getNewsFromDB();

        res.send({
            result: news
        });
    };

    function getTennisNews(req, res) {
        const news = getNewsFromDB()['tennisNews'];
        res.send({
            result: news
        });
    };

    function getLatestSportNews(req, res) {
        const news = getNewsFromDB()['latestSportNews'];
        res.send({
            result: news
        });
    };

    function getRecentPosts(req, res) {
        const posts = getNewsFromDB()['recentPosts'];
        res.send({
            result: posts
        });
    };

    function getRecentFromBlog(req, res) {
        const posts = getPostsBlogFromDB().find({ id: 1 });
        res.send({
            result: posts
        });
    }

    function getMedia(req, res) {
        const media = getMediaFromDB();
        res.send({
            result: media
        });
    }

    function getDetailTennisNews(req, res) {
        const id = +req.params.id;

        MongoClient.connect(mlabUrl, (err, db) => {
            if (err) {
                return console.log('Unable to connect to MongoDB server');
            }
            console.log('Connected with MongoDb ');

            console.log(id);
            db.collection('tennisNews').findOne({ id: id }).then((tennisNews) => {
                console.log(tennisNews);
                res.send({
                    article: tennisNews
                });
            }, (err) => {
                console.log(err);
            });
            // db.close();
        });
    }

    function postComment(req, res) {
        MongoClient.connect(mlabUrl, (err, db) => {
            const comment = req.body.message;
            const id = +req.params.id;
            let date = new Date();
            const currentDate = date.getDate() + "/" +
                (date.getMonth() + 1) + "/" +
                date.getFullYear();
            const data = {
                name: req.body.name,
                email: req.body.email,
                message: req.body.message,
                date: currentDate
            }
            db.collection('tennisNews').update({ id: id }, {
                $push: {
                    comments: data
                }
            });
        });
    }



    return {
        getNews,
        getTennisNews,
        getLatestSportNews,
        getRecentFromBlog,
        getRecentPosts,
        getMedia,
        getDetailTennisNews,
        postComment
    };
};