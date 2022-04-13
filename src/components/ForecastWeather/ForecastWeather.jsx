import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import NavbarForecast from "../UI/Navbar/NavbarForecast";
import RouterForecast from "../../AppRouter/RouterForecast";
import PostService from "../../API/PostService";
import "../../styles/ForecastWeather/ForecastWeather.scss";
import { useFetching } from "../../hooks/useFetching";



function ForecastWeather(props) {

    const [coords, setCoords] = useState();
    const [weather, setWeather] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    async function fetchWeather(coords) {

        try {
            setIsLoading(true);
            if (coords !== undefined) {
                const weather = await PostService.getForecastWeather(coords.lat, coords.lon);
                // const weather = 'work'
                setWeather(weather.daily)
            }
        }
        catch (e) {
            setError(e.massage);
        }
        finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        setCoords(props.coords)
    }, [props])

    useEffect(() => {
        fetchWeather(coords)
    }, [coords])


    return (
        <div className="forecast-weather">
            <BrowserRouter>
                <NavbarForecast />
                <RouterForecast weather={weather} isLoading={isLoading} />
            </BrowserRouter>
        </div>
    )
}
export default ForecastWeather;