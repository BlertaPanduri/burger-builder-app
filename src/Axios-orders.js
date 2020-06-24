import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://burger-builder-react-bf18d.firebaseio.com/'
})

export default instance;