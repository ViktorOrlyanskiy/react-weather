import React, { useEffect, useState } from "react";
import DayCard from "./DayCard";
import Loader from "../UI/Loader/Loader";
import "../../styles/ForecastWeather/WeeklyForecast.scss";

function WeeklyForecast(props) {

    const [weather, setWeather] = useState();

    // получает данные погоды из пропсов
    useEffect(() => {
        setWeather(props.weather)
    }, [props])


    return (
        <div className="weekly-forecast">
            {(weather)
                ?
                weather.map((day, index) =>
                    (index < 7) ? (<DayCard weather={day} key={day.dt} index={index} />) : ''
                )
                : <Loader />
            }
        </div>
    )
}
export default WeeklyForecast;