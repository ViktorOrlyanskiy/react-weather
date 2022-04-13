import React, { useEffect, useState } from "react";
import "../../styles/CurrentWeather/CurrentWeatherMain.scss";
import { getTime, displayIconWeather } from "../../utils/currentWeatherMain";
import Loader from "../UI/Loader/Loader";

function WeatherToday(props) {

    const [time, setTime] = useState('');
    const [city, setCity] = useState('');
    const [temp, setTemp] = useState('0');
    const [image, setImage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function fetchWeather(parameters) {
        if (parameters !== undefined) {
            setTemp(Math.round(parameters.temp))
            setImage(displayIconWeather(parameters.weather[0].id))
        }
    }

    // получает данные погоды из пропсов
    useEffect(() => {
        fetchWeather(props.weather);
        setIsLoading(props.isLoading)
        setCity(props.city)
    }, [props])

    // показывает и изменяет время
    useEffect(() => {
        setTime(getTime());
        setInterval(() => {
            setTime(getTime())
        }, 60000)
    }, [])


    return (
        <div className="current-weather__main main-block" >
            {isLoading
                ? <Loader />
                : <div>
                    <div className="main-block__row">
                        <div className="main-block__item">
                            <p className="main-block__temp">{temp}&deg;</p>
                            <p className="main-block__title">Сегодня</p>
                        </div>
                        <div className={`main-block__item main-block__item_image ${image}`}></div>
                    </div>
                    <p className="main-block__text">Время: {time}</p>
                    <p className="main-block__text">Город: {city}</p>
                </div>
            }
        </div >
    )
}
export default WeatherToday;