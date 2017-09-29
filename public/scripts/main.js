import { router } from 'router';

$('body').ready(function() {
    router.start();
    $(".preloading-icon").fadeOut("slow");
});