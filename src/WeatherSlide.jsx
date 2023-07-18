import React, { useState } from "react";

const WeatherSlide = ({ weatherData }) => {
  const [selectedHour, setSelectedHour] = useState(null);

  const handleHourChange = (event) => {
    const hour = parseInt(event.target.value, 10);
    setSelectedHour(hour);
  };

  let selectedData =
    weatherData["forecast"]["forecastday"][0]["hour"][parseInt(selectedHour)];

  return (
    <div className="slider-container">
      <p id="hour">
        Hour: {selectedHour < 10 ? "0" : ""}
        {selectedHour}:00
      </p>
      <input
        type="range"
        min="0"
        max="23"
        value={selectedHour || 0}
        onChange={handleHourChange}
        className="slider"
      ></input>
      <div className="table">
        <table>
          <tbody>
            <tr>
              <td>Humidity</td>
              <td>{(selectedData && selectedData["humidity"]) || 0} %</td>
            </tr>
            <tr>
              <td>Wind direction</td>
              <td>{(selectedData && selectedData["wind_dir"]) || 0}</td>
            </tr>
            <tr>
              <td>Wind velocity</td>
              <td>{(selectedData && selectedData["wind_kph"]) || 0} km/h</td>
            </tr>
            <tr>
              <td>Condition</td>
              <td>{(selectedData && selectedData["condition"].text) || 0}</td>
            </tr>
            <tr>
              <td>Temperature</td>
              <td>{(selectedData && selectedData["temp_c"]) || 0} °C</td>
            </tr>
            <tr>
              <td>UV</td>
              <td>{(selectedData && selectedData["uv"]) || 0}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WeatherSlide;
