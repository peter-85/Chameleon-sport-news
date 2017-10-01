import { requester } from 'requester';

class DataService {

    news() {
        return requester.getJSON('/api/news')
    }

    tennisNews() {
        return requester.getJSON('/api/news/tennisnews')
    }

    latestSportNews() {
        return requester.getJSON('/api/news/latestSportNews')
    }

    recentFromBlog() {
        return requester.getJSON('/api/getFromBlog')
    }

    recentPosts() {
        return requester.getJSON('/api/news/recentPosts')
    }

    media() {
        return requester.getJSON('/api/news/media')
    }


}
const dataService = new DataService();
export { dataService };