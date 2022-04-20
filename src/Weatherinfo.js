import React from "react";

export default function WeatherInfo(props) {
    return (
        <ul>
            <li>temperature: {Math.round(props.info.temp)}°C</li>
            <li>Description: {props.info.description} </li>
            <li>Wind:{props.info.wind} km/h</li>
            <li>humidity:{props.info.humidity}%</li>
            <li>
                {" "}
                <img src={props.info.icon} alt={props.info.description} />{" "}
            </li>
        </ul>
    );
}
