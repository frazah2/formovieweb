import axios from "axios";
import {API_KEY_PARAM, BASE_URL} from "../config"

export class MoviShowAPI{

    static async fetchPopular(){ 
        const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
        return response.data.results[1]
    }
    static async fetchRcomendations(id){
        const response = await axios.get(`${BASE_URL}tv/${id}/recommendations${API_KEY_PARAM}`);
        // console.log(response);
        return response
        
    }
}