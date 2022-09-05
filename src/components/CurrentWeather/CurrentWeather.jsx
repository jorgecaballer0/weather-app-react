import React from "react";
import {
  UilLocationPoint,
  UilThermometer,
  UilWind,
  UilTemperaturePlus,
  UilTemperatureMinus,
  UilTornado,
} from "@iconscout/react-unicons";

const CurrentWeather = ({ data }) => {
  return (
    <section className="flex justify-around p-4 mx-12 text-center text-white shadow-lg bg-slate-700 rounded-xl">
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center">
          <p className="flex items-center text-xl font-bold">
            <UilLocationPoint size={20} />
            {data.city}
          </p>
          <p className="text-base italic uppercase">
            {data.weather[0].description}
          </p>
        </div>
        <div className="flex flex-row items-center justify-start">
          <img
            src={`/src/assets/icons/${data.weather[0].icon}.png`}
            alt="weather"
            className="w-1/2"
          />
          <p className="text-4xl font-bold">{Math.round(data.main.temp)}°C</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-1 [&>div]:flex [&>div]:items-center [&>div]:justify-center [&>div>span]:text-gray-300 [&>div]:text-sm [&>div>span]:mr-2 [&>div>span]:ml-1 [&>div>span]:font-bold">
        <p className="text-xl font-bold uppercase">Detalles</p>
        <div>
          <UilThermometer size={18} color="#fff" />
          <span>Sensación Térmica:</span>
          <p>{Math.round(data.main.feels_like)} °C</p>
        </div>
        <div>
          <UilWind size={18} color="#fff" />
          <span>Viento</span>
          <p>{data.wind.speed} M/s</p>
        </div>
        <div>
          <UilTornado size={18} color="#fff" />
          <span>Humedad</span>
          <p>{data.main.humidity}%</p>
        </div>
        <div>
          <UilTemperatureMinus size={18} color="#fff" />
          <span>Min:</span>
          <p>{Math.round(data.main.temp_min)} °C</p>
        </div>
        <div>
          <UilTemperaturePlus size={18} color="#fff" />
          <span>Máx:</span>
          <p>{Math.round(data.main.temp_max)} °C</p>
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;
