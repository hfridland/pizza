import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://haimpizza-11dbe.firebaseio.com/'
});

export default instance;