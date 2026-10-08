import "./SearchBar.css";
import React, { useState } from 'react'
import WeatherCard from './WeatherCard.jsx'

function SearchBar() {

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [cityName, setCityName] = useState("");

    async function searchWeather() {
        if (city == "") {
            return;
        }

        setLoading(true);
        setError("");

        try {
            const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`);
            const data = await response.json();
            setCityName(data.results[0].name);
            const latitude = data.results[0].latitude;
            const longitude = data.results[0].longitude;
            const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m`);
            const weatherData = await weatherResponse.json();
            setWeather(weatherData);
        } catch (error) {
            console.log(error)
            setError("error aagya");
            setWeather(null)
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className="search-box">
                <input className="search-input" type="text" placeholder="Enter City" value={city} onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        searchWeather();
                    }
                }} onChange={(e) => {
                    setCity(e.target.value);
                }} />
                <button className="search-button" onClick={searchWeather}>Search</button>
            </div>

            {loading && <p>Loading...</p>}

            {error && (
                <div className="error-card">
                    <h2>City not found</h2>
                    <p>Please enter a valid city name.</p>
                </div>
            )}

            {weather && <WeatherCard weather={weather} cityName={cityName} />}

        </>
    )
}

export default SearchBar