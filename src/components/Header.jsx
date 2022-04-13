import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { listCities } from "../assets/listCitiesRussia.js";
import { searchCoords } from "../utils/App.js";
import "../styles/Header.scss";


function Header({ changeTheme, theme, changeCity, changeCoords }) {

    const [value, setValue] = useState('');
    const [styleError, setStyleError] = useState('');
    const [inputError, setInputError] = useState(false);


    const changeCurrentTheme = (theme) => {
        let newTheme = 'dark-theme';
        if (theme.includes('dark')) {
            newTheme = 'light-theme'
        }
        changeTheme(newTheme)
    }

    const validationForm = () => {
        if (inputError) {
            setStyleError('active-input')
            setValue('Город не найден!')
        }
        else {
            setStyleError('')
            setValue('')
        }
    }

    useEffect(() => {
        validationForm()
    }, [inputError])


    const searchCoordsCity = (e) => {
        e.preventDefault();
        const [city, coords] = searchCoords(value, listCities)

        if (city) {
            setValue('')
            changeCity(city)
            changeCoords(coords)
        }
        else {
            setInputError(true)
        }
    }


    return (
        <header className="header">

            <div className="header-logo">
                <div className="header-logo__img"></div>
                <div className="header-logo__title">React Weather</div>
            </div>

            <div className="header-control">
                <button
                    className="change-theme btn"
                    onClick={() => { changeCurrentTheme(theme) }}
                >
                </button>

                <form className="search-city__form">
                    <input
                        value={value}
                        onChange={e => setValue(e.target.value.trim())}
                        onClick={() => { if (inputError) setInputError(false) }}
                        type="text"
                        placeholder="Поиск города"
                        className={`search-city__input ${styleError}`}

                    />
                    <button
                        onClick={searchCoordsCity}
                        className="search-city__btn"
                    >
                        <FaSearch className={"btn-search"} />
                    </button>
                </form>
            </div>
        </header >
    )
}
export default Header;