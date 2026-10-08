import "./WeatherCard.css";
function WeatherCard({ weather , cityName }) {

    return (
        <div className="weather-card">

            <h2 className="city-name">
                {cityName}
            </h2>

            <p className="temperature">
                {weather.current.temperature_2m}°C
            </p>

            <div className="weather-details">

                <div className="detail">
                    <div className="detail-label">
                        Humidity
                    </div>

                    <div className="detail-value">
                        {weather.current.relative_humidity_2m}%
                    </div>
                </div>

                <div className="detail">
                    <div className="detail-label">
                        Feels Like
                    </div>

                    <div className="detail-value">
                        {weather.current.apparent_temperature}°C
                    </div>
                </div>

                <div className="detail">
                    <div className="detail-label">
                        Wind
                    </div>

                    <div className="detail-value">
                        {weather.current.wind_speed_10m} km/h
                    </div>
                </div>

            </div>

        </div>
    )
}

export default WeatherCard