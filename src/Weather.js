import React, {useState} from "react";
import axios from "axios";
import "./Weather.css"

export default function Weather() {
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            temperature: response.data.main.temp,
            description: response.data,
            city: response.data.name,

        });
        setReady(true);
    }

    if (ready) {
        return (
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9">

                            <input type="search" npm
                                   placeholder="Enter a city..."
                                   className="form-control"
                                   autoFocus="on"/>
                        </div>
                        <div className="col-3">
                            <input type="submit"
                                   value="search"
                                   className="btn btn-primary"
                            />
                        </div>
                    </div>
                </form>
                <h1>{weatherData.city}</h1>
                <ul>
                    <li>
                        Thursday 14:44
                    </li>
                    <li>
                        {weatherData.description}
                    </li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
                        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                             alt="Mostly Cloudy"/>
                        <span className="temperature">{Math.round(weatherData.temperature)}  </span>
                        <span className="unit">°C </span>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li> Precipitation: {weatherData.precipitation}%</li>
                            <li> Humidity: {weatherData.humidity}%</li>
                            <li> Wind: {weatherData.wind} km/h</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else {
        const apiKey = "1887250fbd68c3f9205830915ce15b04\n";
        let city = "London"
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse);
        return "loading";
    }
}