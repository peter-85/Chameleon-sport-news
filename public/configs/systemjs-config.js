SystemJS.config({
    // tell SystemJS which transpiler to use
    transpiler: 'plugin-babel',
    // tell SystemJS where to look for the dependencies
    map: {
        'plugin-babel': 'https://cdn.rawgit.com/systemjs/plugin-babel/master/plugin-babel.js',
        'systemjs-babel-build': 'https://cdn.rawgit.com/systemjs/plugin-babel/master/systemjs-babel-browser.js',

        // app scripts 
        'main': './scripts/main.js',
        'router': './configs/router-config.js',
        // 'validator': './js/helpers/validator.js',


        'htmlHandler': './scripts/helpers/html-handler.js',
        'requester': './scripts/helpers/requester.js',
        'templateHandler': './scripts/helpers/template-handler.js',
        'dataService': './scripts/data/data-service.js',

        'newsController': './scripts/controllers/news-controller.js'
            // 'headerController': './js/controllers/header-controller.js',
            // 'accountController': '././js/controllers/account-controller.js',
            // 'footerController': './js/controllers/footer-controller.js',
            // 'chartProvider': './js/helpers/chart-provider.js',
            // 'time': './js/helpers/date-provider.js',

        // 'handlebars': 'https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.6/handlebars.min.js',

    }
});