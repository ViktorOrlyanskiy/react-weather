import React, { useEffect, useState } from "react";
import PostService from "../../API/PostService";
import CurrentWeatherMain from "./CurrentWeatherMain";
import CurrentWeatherOptions from "./CurrentWeatherOptions";
import "../../styles/CurrentWeather/CurrentWeather.scss";


function CurrentWeather(props) {

    const [city, setCity] = useState('');
    const [coords, setCoords] = useState();
    const [weather, setWeather] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    async function fetchWeather(coords) {

        try {
            setIsLoading(true);
            if (coords !== undefined) {
                const weather = await PostService.getCurrentWeather(coords.lat, coords.lon);
                // const weather = 'work'
                setWeather(weather.current)
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
        setCity(props.city)
    }, [props])

    useEffect(() => {
        fetchWeather(coords)
    }, [coords])


    return (
        <div className="current-weather">
            <CurrentWeatherMain weather={weather} isLoading={isLoading} city={city} />
            <CurrentWeatherOptions weather={weather} isLoading={isLoading} />
        </div>
    )
}

export default CurrentWeather;