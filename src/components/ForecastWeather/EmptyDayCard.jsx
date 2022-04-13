import React from "react";
import '../../styles/ForecastWeather/DayCard.scss';
import { displayDate } from "../../utils/MonthlyForecast.js";

function EmptyDayCard(props) {
    return (
        <div className={props.style}>
            <div className="day-card__title">{displayDate(1)}</div>
            <div className="day-card__subtitle">Сегодня</div>
            <div className={`day-card__image mainly-cloudy`}></div>
            <div className="day-card__temp_day">+10º</div>
            <div className="day-card__temp_night">-10º</div>
            <div className="day-card__description">Прогноз платный</div>
        </div >
    )
}

export default EmptyDayCard;