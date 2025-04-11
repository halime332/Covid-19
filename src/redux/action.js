import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../utils/api";
import axios from "axios";


export const getDetails = createAsyncThunk(
    "/covid/ getDetails",
    async (country) => {

        //api'lara atılacak istekleri belirle
        const req1 = api.get("/statistics", { params: { country } });

        const req2 = axios.get(`https://restcountries.com/v3.1/name/${country}`);

        const responses = await Promise.all([req1, req2]);



        let data = responses[0].data.response[0];


        return;

        //veriyi formatla
        data = {
            continent: data.continent,
            country: data.country,
            day: data.day,
            deaths: data.deaths.total,
            populations: data.population,
            tests: data.tests.total,
            flags: responses[1].data[0].flags,
        };

        //aksiyonun payload'ın belirle
        return data;
    }
);

/*
    İstediğim payload:

    {
     continent: "Asia",
     country: "Turkey",
     day:"2025-01-07",
     cases: 8984097,
     deaths: 103543
     population:324934
     tests:34893245,
     flags:{}
    }

*/