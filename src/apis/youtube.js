import axios from 'axios';

const KEY="AIzaSyBmItmEUWmveDVMuN8oRVwT7w9UjfsbIRw";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet', 
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
})


