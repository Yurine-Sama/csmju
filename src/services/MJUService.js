import axios from "axios";

const MJUService = axios.create({
  baseURL: process.env.VUE_APP_MJU_API,
  
  headers: {
    "Content-type": "application/json",
    "Accept": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default MJUService;