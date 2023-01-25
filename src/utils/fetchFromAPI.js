import axios from "axios";


const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: { 
    maxResults: '50',
   },
  headers: {
    'X-RapidAPI-Key':'472197bcb0msh72d701c74f491a8p1b9576jsnfb78f78d5552',
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
export const fetchFromAPI=async(url)=>
{
   const {data}= await axios.get(`${BASE_URL}/${url}`,options)
   return data;
}