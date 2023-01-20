import React from "react";
import axios from "axios";

const API = axios.create({
    baseURL:"http://www.omdbapi.com/"
});

export default API;