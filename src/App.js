import './App.css';
import Weather from "./Weather";

export default function App() {
    return (
        <div className="App">
            <div className="weather-container" id="weather">
                <Weather defaultCity="New York"/>
                <footer className="source-code">
                    <a href="https://github.com/Daishwick/weather_app" target="noopener">
                        Open-source code
                    </a>, by
                    Jitske Riswick
                </footer>
            </div>
        </div>
    );
}


