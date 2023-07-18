import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {

    const getLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setLatitude(position.coords.latitude);
              setLongitude(position.coords.longitude);
            },
            (error) => {
              console.error('Error getting location:', error);
            }
          );

          console.log(typeof latitude);
        } else {
          console.error('Geolocation is not supported by this browser.');
        }
      };

      getLocation();

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.weatherapi.com/v1/current.json?key=82d47dd3dcc341b5bf9223445231707&q="+ latitude+','+longitude+"&aqi=no"
        ); // Replace with your API endpoint
        setWeatherData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchData();
    setInterval(() => fetchData(), 300000);
  }, []);

  return (
    <div className="container">
      {weatherData ? (
        <div className="w-data">
          <p id="city">
            {weatherData["location"]["name"] +
              ", " +
              weatherData["location"]["country"]}
          </p>
          <img
            src={
              "https:" +
              weatherData["current"]["condition"]["icon"].replaceAll(
                "64",
                "128"
              )
            }
            alt={weatherData["current"]["condition"]["text"]}
          ></img>
          <p id="temp">{weatherData["current"]["temp_c"] + '°C'}</p>
          <p>{weatherData["current"]["condition"]["text"]}</p>
        </div>
      ) : (
        <p className="w-nodata">Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;
