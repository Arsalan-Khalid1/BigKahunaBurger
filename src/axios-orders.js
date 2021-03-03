import axios from 'axios';

const instace = axios.create({
    baseURL: 'https://big-kahuna-burger-3628a-default-rtdb.firebaseio.com/'
});

export default instace;