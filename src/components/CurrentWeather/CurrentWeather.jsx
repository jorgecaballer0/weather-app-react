import React from "react";

const CurrentWeather = ({data}) => {
  return (
    <div>
      <div>
        <div>
          <p>Belgrade</p>
          <p>Sunny</p>
        </div>
        <img src="/src/assets/icons/01d.png" alt="weather" />
      </div>
      <div>
        <p>18°C</p>
        <div>
          <div>
            <span>Details</span>
          </div>
          <div>
            <span>Feels like</span>
            <span>22°C</span>
          </div>
          <div>
            <span>Wind</span>
            <span>10 Km/H</span>
          </div>
          <div>
            <span>Humidity</span>
            <span>15%</span>
          </div>
          <div>
            <span>Pressure</span>
            <span>20 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
