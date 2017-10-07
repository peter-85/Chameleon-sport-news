import { dataService } from 'dataService'
import { templateHandler } from 'templateHandler'

class NewsController {

    // getTennisNews() {
    //     return dataService.tennisNews();
    // }

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
}

const newsController = new NewsController();

export { newsController };