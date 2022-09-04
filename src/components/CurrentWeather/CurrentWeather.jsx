import React from "react";

const CurrentWeather = ({ data }) => {
  return (
    <div>
      <div>
        <div>
          <p>{data.city}</p>
          <p>{data.weather[0].description}</p>
        </div>
        <img
          src={`/src/assets/icons/${data.weather[0].icon}.png`}
          alt="weather"
        />
      </div>
      <div>
        <p>{Math.round(data.main.temp)}°C</p>
        <div>
          <div>
            <span>Details</span>
          </div>
          <div>
            <span>Feels like</span>
            <span>{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div>
            <span>Wind</span>
            <span>{data.wind.speed} Km/H</span>
          </div>
          <div>
            <span>Humidity</span>
            <span>{data.main.humidity}%</span>
          </div>
          <div>
            <span>Pressure</span>
            <span>{data.main.pressure} hPa</span>
          </div>
          <div>
            <span>Temp min</span>
            <span>{Math.round(data.main.temp_min)}°C</span>
          </div>
          <div>
            <span>Temp max</span>
            <span>{Math.round(data.main.temp_max)}°C</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
