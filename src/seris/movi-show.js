import axios from "axios";
import {API_KEY_PARAM, BASE_URL} from "../config"

export class MoviShowAPI{

    static async fetchPopular(){ 
        const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
        return response.data.results[3]
        console.log(response.data.results[0])
    }
}