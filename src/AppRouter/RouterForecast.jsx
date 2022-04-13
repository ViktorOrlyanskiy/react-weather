import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "../components/UI/Loader/Loader";
import WeeklyForecast from "../components/ForecastWeather/WeeklyForecast";
import MonthlyForecast from "../components/ForecastWeather/MonthlyForecast";
import TenDayForecast from "../components/ForecastWeather/TenDayForecast";
import "../styles/ForecastWeather/RouterForecast.scss";





function RouterForecast(props) {

    const [weather, setWeather] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(props.isLoading)
        setWeather(props.weather)
    }, [props])


    return (
        <div className="forecast-weather__body">
            {isLoading
                ? <Loader />
                : <Routes>
                    <Route path="/" element={<WeeklyForecast weather={weather} />} />
                    <Route path="weekly" element={<WeeklyForecast weather={weather} />} />
                    <Route path="monthly" element={<MonthlyForecast weather={weather} />} />
                    <Route path="tenday" element={<TenDayForecast weather={weather} />} />
                </Routes>
            }
        </div>
    )
}
export default RouterForecast;