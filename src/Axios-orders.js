import axios from 'axios';

const instance = axios.create({
    baseURL:"https://burgerbuilder-b1092.firebaseio.com/"
})


export default instance;