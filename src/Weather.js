import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css"

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            city: response.data.name,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            imgUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            date: new Date(response.data.dt * 1000),
        });
    }

    function search() {
        const apiKey = "ca5f6e4c2919f8a0481d18dad1df2625";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl)
            .then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">

                            <input type="search"
                                   placeholder="Enter a city..."
                                   className="form-control"
                                   autoFocus="on"
                                   onChange={handleCityChange}/>
                        </div>
                        <div className="col-3">
                            <input type="submit"
                                   value="search"
                                   className="btn btn-primary"
                            />
                        </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData}/>
            </div>
        );
    } else {
        search();
        return ("loading...");
    }
}