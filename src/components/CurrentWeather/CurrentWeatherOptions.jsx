import React, { useState, useEffect } from "react";
import "../../styles/CurrentWeather/CurrentWeatherOptions.scss";
import { changeOutDirectionWind, changeOutSpeedWind } from "../../utils/currentWeatherOptions";
import Loader from "../UI/Loader/Loader";

function CurrentWeatherOptions(props) {

    const [weather, setWeather] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const dataToRender = [
        {
            img: 'img-temp', title: 'Температура',
            text: `${weather.temp}º ощущается как ${weather.feelsLike}º`
        },
        {
            img: 'img-pressure', title: 'Давление',
            text: `${weather.pressure} мм. ртутного столба - нормальное`
        },
        {
            img: 'img-precipitation', title: 'Осадки',
            text: `${weather.description}`
        },
        {
            img: 'img-wind', title: 'Ветер',
            text: `${weather.windSpeed} м/с 
            ${changeOutDirectionWind(weather.windDeg)} - ${changeOutSpeedWind(weather.windSpeed)}`
        },
    ];


    async function fetchWeather(parameters) {
        if (parameters !== undefined) {
            setWeather({
                temp: Math.round(parameters.temp),
                feelsLike: Math.round(parameters.feels_like),
                pressure: Math.round(parameters.pressure * 0.75),
                windDeg: parameters.wind_deg,
                windSpeed: parameters.wind_speed,
                description: parameters.weather[0].description,
            })
        }
    }

    // получает данные погоды из пропсов
    useEffect(() => {
        fetchWeather(props.weather)
        setIsLoading(props.isLoading)
    }, [props])


    return (
        <div className="current-weather__options options-block">
            {isLoading
                ? <Loader />
                :
                dataToRender.map(line =>
                    <div className="options-block__line line-options" key={line.img}>
                        <div className={`line-options__img ${line.img}`}></div>
                        <div className="line-options__title">{line.title}</div>
                        <div className="line-options__text">{line.text}</div>
                    </div >)
            }
        </div >
    )
}

export default CurrentWeatherOptions;