import { router } from 'router';
import { mobileMenu } from 'mobileMenu';
import { modal } from 'modal';


$('body').ready(function() {
    router.start();
    $(".preloading-icon").fadeOut("slow");

});