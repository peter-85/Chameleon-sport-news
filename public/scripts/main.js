import { router } from 'router';
// import { MobileMenu } from 'mobileMenu';

$('body').ready(function() {
    router.start();
    $(".preloading-icon").fadeOut("slow");

});

class MobileMenu {
    constructor() {
        this.siteHeader = $('.site-header');
        this.menuIcon = $('.site-header__menu-logo');
        this.menuContent = $('.site-header__nav');
        this.events(); // calling the method on the creation of object which is instance of the class
    }

    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }
    toggleTheMenu() {
        this.menuContent.toggleClass('site-header__nav--is-visible');
        this.siteHeader.toggleClass('site-header--is-expanded');
        this.menuIcon.toggleClass('site-header__menu-icon--close-x');
    }
}

let mobileMenu = new MobileMenu;