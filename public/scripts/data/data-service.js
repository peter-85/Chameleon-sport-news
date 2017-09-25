import { requester } from 'requester';

class DataService {

    news() {
        return requester.getJSON('/api/news')
    }

    tennisNews() {
        return requester.getJSON('/api/news/tennisnews')
    }

}
const dataService = new DataService();
export { dataService };