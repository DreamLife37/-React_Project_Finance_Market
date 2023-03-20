import axios from "axios";

const API_URL = 'https://devandreyit.iex.cloud/v1/'

export const instance = axios.create({
    baseURL: API_URL
});
