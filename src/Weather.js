import React from "react";
import axios from "axios";
import "./Weather.css"

export default function Weather() {
    const apiKey="1887250fbd68c3f9205830915ce15b04\n";
    let city="London"
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    return (


        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">

                        <input type="search"npm
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
            <h1>New York</h1>
            <ul>
                <li>
                    Thursday 14:44
                </li>
                <li>
                    Mostly Cloudy
                </li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                         alt="Mostly Cloudy"/>
                    <span className="temperature"> 11 </span>
                    <span className="unit">°C </span>
                </div>
                <div className="col-6">
                    <ul>
                        <li> Precipitation: 15%</li>
                        <li> Humidity: 5%</li>
                        <li> Wind: 15 km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}