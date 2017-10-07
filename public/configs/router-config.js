import { htmlHandler } from 'htmlHandler';
import { templateHandler } from 'templateHandler';
import { flickrController } from 'flickrController';
import { newsController } from 'newsController';

class Router {

    start() {
        let sammy = Sammy(function() {
            // this.before({}, () => {
            //     headerController.initialize();
            // });

            this.get('#/', (sammy) => sammy.redirect('#/home'));
            this.get('#/home', newsController.getAll);

            //Account
            this.get('#/tennisNews', newsController.getTennisNews);
            this.get('#/tennisNews/:id', (sammy) => newsController.getArticle(sammy));
            this.post('#/tennisNews/comments', (sammy) => newsController.postComment(sammy));
            // this.get('#/account/sign-up', accountController.loadSignUpPage);

            // this.post('#/account/sign-in', accountController.signIn);
            // this.post('#/account/sign-up', accountController.signUp);

            // this.post('#/account/add-to-watchlist', accountController.addToWatchlist);



            // // Other
            // this.get('#/about', () => htmlHandler.setHtml('about', '#content'));
            this.get('#/flickr-feeder', flickrController.getPhotos);
            // this.get('#/tennisNews/1', templateHandler.setTemplate('article', '#content'));
            // this.post('#/contact', footerController.contact);
        });

        $(function() {
            sammy.run('#/');
        });
    }
}

const router = new Router();

export { router };