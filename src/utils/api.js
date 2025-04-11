import axios from "axios";

const api = axios.create({
    baseURL: 'https://covid-193.p.rapidapi.com',
    headers: {
        'x-rapidapi-key': 'c6d3337355msh42fa60353c28f6cp1df951jsna5a1938d4854',
        'x-rapidapi-host': 'covid-193.p.rapidapi.com',
    },
});


export default api;