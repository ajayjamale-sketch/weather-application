import { useState } from "react";
import { fetchWeather } from "./services/weatherService";
import "./App.css";

export default function App() {
  const [lat, setLat] = useState("51.5074");
  const [lon, setLon] = useState("-0.1278");
  const [weather, setWeather] = useState<{
    temperature: number;
    windspeed: number;
  }>();

  const getWeather = async () => {
    try {
      const data = await fetchWeather(lat, lon);
      setWeather(data);
      console.log(data);
    } catch (error) {
      alert("Error fetching weather data");
    }
  };
  return (
    <div>
      <h2>Weather App</h2>

      <label>Latitude:</label>
      <input
        value={lat}
        onChange={(e) => setLat(e.target.value)}
        placeholder="Latitude"
      />
      <br />
      <label>Longitude:</label>
      <input
        value={lon}
        onChange={(e) => setLon(e.target.value)}
        placeholder="Longitude"
      />
      <br />
      <button onClick={getWeather}>Get Weather</button>

      {weather && (
        <div>
          <h3>Temperature: {weather.temperature} °C</h3>
          <h3>Wind Speed: {weather.windspeed} km/h</h3>
        </div>
      )}
    </div>
  );
}
