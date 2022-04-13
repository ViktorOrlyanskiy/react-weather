import React, { useState, useEffect } from "react";
import './styles/App.scss'
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import ForecastWeather from "./components/ForecastWeather/ForecastWeather";
import Header from "./components/Header";
import { getGeolocation, searchCity } from "./utils/App";
import { listCities } from "./assets/listCitiesRussia";



function App() {

  const [coords, setCoords] = useState();
  const [theme, setTheme] = useState('light-theme');
  const [city, setCity] = useState('')

  async function getUserLocation() {

    const geolocation = await getGeolocation();
    const coords = {
      lat: String((geolocation.coords.latitude)),
      lon: String((geolocation.coords.longitude)),
    }

    setCoords(coords)
    setCity(searchCity({ ...coords, listCities }))
  }


  const changeTheme = (newTheme) => {
    setTheme(newTheme)
  }
  const changeCity = (newCity) => {
    setCity(newCity)
  }
  const changeCoords = (newCoords) => {
    setCoords(newCoords)
  }


  useEffect(() => {
    getUserLocation()
  }, [])


  return (
    <div className={`App ${theme}`}>
      <div className="container">
        <Header changeTheme={changeTheme} theme={theme} changeCity={changeCity} changeCoords={changeCoords} />
        <CurrentWeather coords={coords} city={city} />
        <ForecastWeather coords={coords} />
      </div>
    </div>
  );
}

export default App;
