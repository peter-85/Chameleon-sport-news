import { htmlHandler } from 'htmlHandler';
// import { footerController } from 'footerController';
// import { headerController } from 'headerController';
import { newsController } from 'newsController';

class Router {

    start() {
        let sammy = Sammy(function() {
            // this.before({}, () => {
            //     headerController.initialize();
            // });

            this.get('#/', (sammy) => sammy.redirect('#/home'));
            this.get('#/home', () => htmlHandler.setHtml('home', '#content'));

            //Account
            this.get('#/tennisNews', newsController.getTennisNews);
            // this.get('#/account/sign-up', accountController.loadSignUpPage);

            // this.post('#/account/sign-in', accountController.signIn);
            // this.post('#/account/sign-up', accountController.signUp);

            // this.post('#/account/add-to-watchlist', accountController.addToWatchlist);

            // this.get('#/account/sign-out', accountController.signOut);
            // this.get('#/account/market-overview', accountController.getMarketOverview);
            // this.get('#/account/watchlist', accountController.getWatchlist);
            // this.get('#/account/news', accountController.getNews);
            // this.get('#/account/user-settings', accountController.getUserSettings);

            // // Other
            // this.get('#/about', () => htmlHandler.setHtml('about', '#content'));
            // this.get('#/contact', accountController.validateContactForm);
            // this.post('#/newsletter', footerController.subscription);
            // this.post('#/contact', footerController.contact);
        });

        $(function() {
            sammy.run('#/');
        });
    }
}

const router = new Router();

export { router };