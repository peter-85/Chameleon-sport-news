import { templateHandler } from 'templateHandler';
import { requester } from 'requester';

class FlickrController {

    getPhotos() {
        templateHandler.setTemplate('flickr-feeder', '#content');

        $('button').on('click', function() {
            $('button').removeClass('flickr__button--selected');
            $(this).addClass('flickr__button--selected');

            let flickrApi = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?'
            let opts = {
                tags: $(this).text(),
                format: 'json'
            }

            function getPhotos() {
                return new Promise((resolve, reject) => {
                    $.getJSON(flickrApi, opts)
                        .done(resolve)
                        .fail(reject);
                });
            }

            getPhotos().then((photos) => {
                templateHandler.setTemplate('flickr-feeder', '#content', photos);
            });

        });
    }
}

const flickrController = new FlickrController();

export { flickrController };