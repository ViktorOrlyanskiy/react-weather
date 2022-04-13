import React, { useState, useEffect } from "react";
import EmptyDayCard from "./EmptyDayCard";
import Loader from "../UI/Loader/Loader";
import "../../styles/ForecastWeather/MonthlyForecast.scss";

function MonthlyForecast(props) {

    const [weather, setWeather] = useState();
    const [emptyWeather, setEmptyWeather] = useState(new Array(30).fill(''));


    // получает данные погоды из пропсов (по подписке)
    useEffect(() => {
        setWeather(props.weather)
    }, [props])


    return (
        <div className="monthly-forecast">
            {(emptyWeather)
                ?
                emptyWeather.map((day, index) =>
                    <EmptyDayCard key={index} style={"day-card__line"} />
                )
                : <Loader />
            }
        </div>
    )
}
export default MonthlyForecast;