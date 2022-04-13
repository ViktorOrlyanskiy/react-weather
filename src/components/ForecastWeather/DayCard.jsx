import React, { useState, useEffect } from "react";
import { displayTemp, displayDate, displayDay } from "../../utils/DayCard";
import { displayIconWeather } from "../../utils/currentWeatherMain";
import Loader from "../UI/Loader/Loader";
import '../../styles/ForecastWeather/DayCard.scss';


function DayCard(props) {

    const [weather, setWeather] = useState();

    // получает данные погоды из пропсов
    useEffect(() => {
        setWeather(props.weather)
    }, [props])


    return (

        (weather)
            ?
            <div className="day-card">
                <div className="day-card__title">{displayDay(weather.dt, props.index)}</div>
                <div className="day-card__subtitle">{displayDate(weather.dt)}</div>
                <div className={`day-card__image ${displayIconWeather(weather.weather[0].id)}`}></div>
                <div className="day-card__temp_day">{displayTemp(weather.temp.max)}</div>
                <div className="day-card__temp_night">{displayTemp(weather.temp.min)}</div>
                <div className="day-card__description">{weather.weather[0].description}</div>
            </div >
            :
            <Loader />
    )
}

export default DayCard;