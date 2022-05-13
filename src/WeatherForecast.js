import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response) {
    }
console.log(props);

    let apiKey = "ca5f6e4c2919f8a0481d18dad1df2625";
    let longitude = 40.7;
    let latitude = 74;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col-6">
                    <div className="WeatherForecast-day">Thu</div>
                    <WeatherIcon code="01d" size={36}/>

                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperature-max">19°</span>
                        <span className="WeatherForecast-temperature-min"> 10°</span>
                    </div>

                </div>

            </div>

        </div>
    );

}