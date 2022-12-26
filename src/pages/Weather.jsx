import React from "react";
import wind from "../assets/icons/wind.svg";
import sunset from "../assets/icons/temp.svg";
import sunrise from "../assets/icons/temp.svg";
import humidity from "../assets/icons/humidity.svg";
import pressure from "../assets/icons/pressure.svg";
export const WeatherInfoIcons = {
  wind,
  sunset,
  sunrise,
  humidity,
  pressure,
};

const WeatherInfoComponent = ({ name, value }) => {
  return (
    <div className="InfoContainer">
      <img className="InfoIcon" src={WeatherInfoIcons[name]} alt="" />
      <span className="InfoLabel">
        {value}
        <span className="infoSpan">{name}</span>
      </span>
    </div>
  );
};

export const Weather = ({ weather }) => {
  const getTime = () => {
    const pieces = weather?.location?.localtime.split(/[\s ]+/);
    const time = pieces[pieces.length - 1];
    return time;
  };
  return (
    <div>
      <div className="WeatherContainer">
        <span className="Condition">
          <span className="temp">{`${weather?.current?.temp_c}°C`}</span>
          {`  |  ${weather?.current?.condition?.text}`}
        </span>
        {weather?.current?.condition?.icon ? (
          <img
            className="WeatherIcon"
            src={weather?.current?.condition?.icon}
            alt=""
          />
        ) : (
          ""
        )}
      </div>
      <div className="text-center">
        <p className="Location">{`${weather?.location?.name}, ${weather?.location?.country}`}</p>
      </div>
      <div className="text-center"></div>
      <div className="WeatherInfoContainer">
        <WeatherInfoComponent
          name={weather?.current?.is_day ? "sunset" : "sunrise"}
          value={getTime()}
        />
        <WeatherInfoComponent
          name={"humidity"}
          value={weather?.current?.humidity}
        />
        <WeatherInfoComponent
          name={"wind"}
          value={weather?.current?.wind_kph}
        />
        <WeatherInfoComponent
          name={"pressure"}
          value={weather?.current?.pressure_mb}
        />
      </div>
    </div>
  );
};
