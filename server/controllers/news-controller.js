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
        const posts = getPostsBlogFromDB();
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




    return {
        getNews,
        getTennisNews,
        getLatestSportNews,
        getRecentFromBlog,
        getRecentPosts,
        getMedia,
    };
};