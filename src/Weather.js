import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./Weatherinfo";

export default function Weather() {
    const [city, setCity] = useState("");
    const [temperature, setTemperature] = useState(null);

    function displayWeather(response) {
        setTemperature({
            temp: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            icon: "http://openweathermap.org/img/wn/".concat(
                response.data.weather[0].icon,
                "@2x.png"
            ),
            description: response.data.weather[0].description
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        let apiKey = "3a94f3778290bfeee61278505dbbe51d";
        let units = "metric";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
        axios.get(url).then(displayWeather);
    }

    function displayCity(event) {
        setCity(event.target.value);
    }

    return (
        <div className="WeatherSearch">
            <form onSubmit={handleSubmit}>
                <input type="search" placeholder="Type a city" onChange={displayCity}/>
                <input type="submit" value="Search"/>
            </form>
            {temperature !== null ? <WeatherInfo info={temperature}/> : ""}
        </div>
    );
}
