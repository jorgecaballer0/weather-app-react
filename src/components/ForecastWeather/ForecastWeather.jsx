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
      <label>Daitly</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div>
                  <img
                    src={`/src/assets/icons/${item.weather[0].icon}.png`}
                    alt="weather"
                  />
                  <label>{forecastDays[idx]}</label>
                  <label>{item.weather[0].description}</label>
                  <label>
                    {Math.round(item.main.temp_min)}°C /
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div>
                <div>
                  <label>Preassure</label>
                  <label>{item.main.pressure} hPa</label>
                </div>
                <div>
                  <label>Humidity</label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div>
                  <label>Clouds</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div>
                  <label>Wind</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div>
                  <label>Sea level</label>
                  <label>{item.main.sea_level} Mts.</label>
                </div>
                <div>
                  <label>Feels like</label>
                  <label>{Math.round(item.main.feels_like)}°C</label>
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
