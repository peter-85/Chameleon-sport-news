import { htmlHandler } from 'htmlHandler';
import { templateHandler } from 'templateHandler';
import { flickrController } from 'flickrController';
import { newsController } from 'newsController';

class Router {

    start() {
        let sammy = Sammy(function() {

            this.get('#/', (sammy) => sammy.redirect('#/home'));
            this.get('#/home', newsController.getAll);

            //News
            this.get('#/tennisNews', newsController.getTennisNews);
            this.get('#/tennisNews/:id', (sammy) => newsController.getTennisArticle(sammy));
            this.post('#/tennisNews/comments', (sammy) => newsController.postTennisComment(sammy));

            this.get('#/latestSportNews', newsController.getLatestSportNews);
            this.get('#/latestSportNews/:id', (sammy) => newsController.getSportArticle(sammy));
            this.post('#/latestSportNews/comments', (sammy) => newsController.postSportComment(sammy));


            // Other
            this.get('#/flickr-feeder', flickrController.getPhotos);
        });

        $(function() {
            sammy.run('#/');
        });
    }
}

const router = new Router();

export { router };