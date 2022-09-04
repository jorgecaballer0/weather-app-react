import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

const ForecastWeather = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <h1 className="pt-4 text-2xl font-bold text-center text-white">
        Próximos {WEEK_DAYS.length} días
      </h1>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="flex items-center justify-between px-4 m-2 mx-12 text-base text-white h-14 bg-slate-600 rounded-xl">
                  <div className="flex items-center justify-start">
                    <img
                      src={`/src/assets/icons/${item.weather[0].icon}.png`}
                      alt="weather"
                      className="w-10"
                    />
                    <p className="pl-4 uppercase">{forecastDays[idx]}</p>
                  </div>
                  <div className="flex gap-4">
                    <p className="text-sm italic uppercase">
                      {item.weather[0].description}
                    </p>
                    <label className="text-sm text-gray-300">
                      {Math.round(item.main.temp_min)} °C /
                      {Math.round(item.main.temp_max)} °C
                    </label>
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="grid grid-cols-3 mx-12 text-center text-white rounded-lg bg-slate-500 [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div]:py-2 [&>div>p]:px-2 [&>div>p]:font-bold [&>div>p]:text-gray-300">
                <div>
                  <p>Sensación Térmica:</p>
                  <label>{Math.round(item.main.feels_like)}°C</label>
                </div>
                <div>
                  <p>Viento:</p>
                  <label>{item.wind.speed} M/s</label>
                </div>
                <div>
                  <p>Humedad:</p>
                  <label>{item.main.humidity}%</label>
                </div>
                <div>
                  <p>Nubosidad:</p>
                  <label>{item.clouds.all}%</label>
                </div>
                <div>
                  <p>Min:</p>
                  <label>{Math.round(item.main.temp_min)} °C</label>
                </div>
                <div>
                  <p>Máx:</p>
                  <label>{Math.round(item.main.temp_max)} °C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default ForecastWeather;
