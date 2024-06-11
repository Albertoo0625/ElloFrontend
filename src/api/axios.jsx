import axios from "axios";

// const BASE_URL='http://localhost:4000/graphql';

const BASE_URL='https://ellobackend.onrender.com/graphql';

export default axios.create({
    baseURL: BASE_URL
})