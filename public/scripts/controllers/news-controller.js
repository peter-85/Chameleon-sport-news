import { dataService } from 'dataService'
import { templateHandler } from 'templateHandler'

class NewsController {

    getTennisArticle(sammy) {
        const postId = sammy.params.id;
        return dataService.tennisArticle(postId).then((article) => {
            console.log(article);
            templateHandler.setTemplate('article', '#content', article);
        });
    }

    getSportArticle(sammy) {
        const postId = sammy.params.id;
        return dataService.sportArticle(postId).then((article) => {
            console.log(article);
            templateHandler.setTemplate('article', '#content', article);
        });
    }



    getTennisNews() {
        dataService.tennisNews().then((tennisNews) => {
            templateHandler.setTemplate('category', '#content', tennisNews)
        });
    }

    getLatestSportNews() {
        dataService.latestSportNews().then((sportNews) => {
            templateHandler.setTemplate('category', '#content', sportNews)
        });
    }

    getAll() {
        const promises = [
            dataService.tennisNews(),
            dataService.latestSportNews(),
            dataService.recentPosts(),
            dataService.media(),
        ];
        Promise.all(promises).then((values) => {
            const tennisNews = values[0];
            const latestSportNews = values[1];
            const recentPosts = values[2];
            const media = values[3];

            templateHandler.setTemplate('home', '#content', {
                tennisNews,
                latestSportNews,
                recentPosts,
                media,
            });
        });
    }
    postTennisComment(sammy) {
        const name = sammy.params.name;
        const email = sammy.params.email;
        const message = sammy.params.message;
        const postId = +window.location.href.split('tennisNews/')[1].split('/')[0];
        const url = `http://localhost:3000/api/news/tennisnews/${postId}`;

        const data = {
            name,
            email,
            message,
        };

        $.post(url, data);
        location.reload(true);
    }

    postSportComment(sammy) {
        const name = sammy.params.name;
        const email = sammy.params.email;
        const message = sammy.params.message;
        const postId = +window.location.href.split('latestSportNews/')[1].split('/')[0];
        const url = `http://localhost:3000/api/news/latestSportNews/${postId}`;

        const data = {
            name,
            email,
            message,
        };

        $.post(url, data);
        location.reload(true);
    }
}


const newsController = new NewsController();

export { newsController };