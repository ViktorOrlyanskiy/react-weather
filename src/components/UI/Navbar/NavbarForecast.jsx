import React from "react";
import { NavLink } from "react-router-dom";
import "../../../styles/ForecastWeather/NavbarForecast.scss";


function NavbarForecast() {
    return (
        <nav className="forecast-weather__menu">
            <ul className="menu__list">
                <li className="menu__link"><NavLink to="weekly" className="menu__link_navlink">На неделю</NavLink></li>
                <li className="menu__link"><NavLink to="monthly" className="menu__link_navlink">На месяц</NavLink></li>
                <li className="menu__link"><NavLink to="tenday" className="menu__link_navlink">На 10 дней</NavLink></li>
                <li className="menu__link"><NavLink to="/" className="menu__link_navlink">Отменить</NavLink></li>
            </ul>
        </nav>
    )
}
export default NavbarForecast;