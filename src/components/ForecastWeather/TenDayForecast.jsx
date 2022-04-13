import React, { useState, useEffect } from "react";
import EmptyDayCard from "./EmptyDayCard";
import Loader from "../UI/Loader/Loader";
import "../../styles/ForecastWeather/TenDayForecast.scss";
import Carousel from "../UI/Carousel/Carousel";


function TenDayForecast(props) {
    const [weather, setWeather] = useState();
    const [emptyWeather, setEmptyWeather] = useState(new Array(10).fill(''));


    // получает данные погоды из пропсов (по подписке)
    useEffect(() => {
        setWeather(props.weather)
    }, [props])


    return (
        <div className="tenday-forecast">
            {(emptyWeather)
                ?
                (window.innerWidth > 1220)
                    ?
                    <Carousel Carousel itemWidth={168} numberVisibleElements={7}>
                        {emptyWeather.map((day, index) =>
                            <EmptyDayCard key={index} style={'day-card'} />)}

                    </Carousel >
                    :
                    emptyWeather.map((day, index) =>
                        <EmptyDayCard key={index} style={'day-card__line'} />)


                : <Loader />
            }
        </div >
    )

}
export default TenDayForecast;  