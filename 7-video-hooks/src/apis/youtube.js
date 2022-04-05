import axios from 'axios';

const KEY = 'AIzaSyABzRNRkmOnC11RhmQtrh-U2MVTFKP5wWA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});