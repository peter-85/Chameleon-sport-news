import { dataService } from 'dataService'
import { templateHandler } from 'templateHandler'

class NewsController {

    getArticle(sammy) {
        const postId = sammy.params.id;
        return dataService.article(postId).then((article) => {
            console.log(article);
            templateHandler.setTemplate('article', '#content', article);
        });
    }

    // getLatestSportNews() {
    //     return dataService.latestSportNews();
    // }

    // getLatestSportNews() {
    //     dataService.tennisNews().then((json) => {
    //         templateHandler.setTemplate('tennis-news', '#content', json)
    //     });
    // }

    // getTennisArticle() {
    //     return dataService.tennisArticle();
    // }

    getAll() {
        let promises = [
            dataService.tennisNews(),
            dataService.latestSportNews(),
            dataService.recentPosts(),
            dataService.media(),
        ];
        Promise.all(promises).then(values => {

            let tennisNews = values[0];
            let latestSportNews = values[1];
            let recentPosts = values[2];
            let media = values[3]

            templateHandler.setTemplate('home', '#content', {
                tennisNews,
                latestSportNews,
                recentPosts,
                media
            });
        })
    }
    postComment(sammy) {

        let name = sammy.params.name;
        let email = sammy.params.email;
        let message = sammy.params.message;
        let postId = +window.location.href.split('tennisNews/')[1].split('/')[0],
            url = `http://localhost:3000/api/news/tennisnews/${postId}`;

        const data = {
            name,
            email,
            message
        }
        console.log(data);
        // Send the data using post
        $.post(url, data)

        // sammy.redirect(`#/tennisNews/${postId}`);
        // $("#contact-form")[0].reset();
        location.reload(true);


    };
}


const newsController = new NewsController();

export { newsController };