import { dataService } from 'dataService'
import { templateHandler } from 'templateHandler'

class NewsController {

    getTennisNews() {
        dataService.tennisNews().then((json) => {
            templateHandler.setTemplate('tennis-news', '#content', json)
        });
    }
}

const newsController = new NewsController();

export { newsController };