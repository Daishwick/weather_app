import React, {useState} from "react";
import axios from "axios";
import FormatedDate from "./FormatedDate";
import "./Weather.css"

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            city: response.data.name,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
            date: new Date(response.data.dt * 1000),
        });
    }

    function search() {
        const apiKey = "ca5f6e4c2919f8a0481d18dad1df2625";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse);
    }

    if (weatherData.ready) {
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
                        <FormatedDate date={weatherData}/>
                    </li>
                    <li className="text-capitalize">
                        {weatherData.description}
                    </li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
                        <img src={weatherData.imgUrl}
                             alt="Mostly Cloudy"/>
                        <span className="temperature">{Math.round(weatherData.temperature)}  </span>
                        <span className="unit">°C </span>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li> Precipitation: 15%</li>
                            <li> Humidity: {weatherData.humidity}%</li>
                            <li> Wind: {weatherData.wind} km/h</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else {
        search();
        return "loading";
    }
}