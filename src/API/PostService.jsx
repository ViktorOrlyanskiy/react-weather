import axios from "axios";

const keyAPI = '2ae4d7807ec01c98cad807dcd72782a9'
const keyAPI2 = '238d86931c0a56eb213e65c9c710a844'

export default class PostService {

    static async getCurrentWeather(lat = '41.90', lon = '12.49') {
        const responce = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&&units=metric&appid=${keyAPI2}`)
        return responce.data;
    }

    static async getForecastWeather(lat = '41.90', lon = '12.49') {

        const responce = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&&units=metric&appid=${keyAPI2}`)
        return responce.data;
    }

}