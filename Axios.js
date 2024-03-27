import axios from 'axios';

const Axiosdata = axios.create({
  baseURL: 'http://localhost:3001/data',
});

export default Axiosdata;
