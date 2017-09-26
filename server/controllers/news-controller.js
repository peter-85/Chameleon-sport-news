// const _ = require("lodash");

module.exports = (db) => {
    db.defaults({
            news: [],
            users: []
        })
        .value();

    // Get
    function getNewsFromDB() {
        return db.get('news').value();
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



    return {
        getNews,
        getTennisNews,
    };
};