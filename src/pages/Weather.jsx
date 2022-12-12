import React from "react";
import day from "../assets/icons/day.svg";
import wind from "../assets/icons/wind.svg";
import rain from "../assets/icons/rain.svg";
import sunset from "../assets/icons/temp.svg";
import sunny from "../assets/icons/sunny.svg";
import storm from "../assets/icons/storm.svg";
import night from "../assets/icons/night.svg";
import sunrise from "../assets/icons/temp.svg";
import cloudy from "../assets/icons/cloudy.svg";
import humidity from "../assets/icons/humidity.svg";
import pressure from "../assets/icons/pressure.svg";
import rainNight from "../assets/icons/rain-night.svg";
import perfectDay from "../assets/icons/perfect-day.svg";
import cloudyNight from "../assets/icons/cloudy-night.svg";

export const WeatherInfoIcons = {
  wind,
  sunset,
  sunrise,
  humidity,
  pressure,
  "01d": sunny,
  "01n": night,
  "02d": day,
  "02n": cloudyNight,
  "03d": cloudy,
  "03n": cloudy,
  "04d": perfectDay,
  "04n": cloudyNight,
  "09d": rain,
  "09n": rainNight,
  "10d": rain,
  "10n": rainNight,
  "11d": storm,
  "11n": storm,
};

const WeatherInfoComponent = ({ name, value }) => {
  return (
    <div className="InfoContainer">
      <img className="InfoIcon" src={WeatherInfoIcons[name]} alt="" />
      <span className="InfoLabel">
        {value}
        <span>{name}</span>
      </span>
    </div>
  );
};

export const Weather = ({ weather }) => {
  const isDay = weather?.weather[0].icon?.includes("d");
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };

  return (
    <div>
      <div className="WeatherContainer">
        <span className="Condition">
          <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
          {`  |  ${weather?.weather[0].description}`}
        </span>
        {WeatherInfoIcons[weather?.weather[0].icon] ? (
          <img
            className="WeatherIcon"
            src={WeatherInfoIcons[weather?.weather[0].icon]}
            alt=""
          />
        ) : (
          ""
        )}
      </div>
      <span className="Location">{`${weather?.name}, ${weather?.sys?.country}`}</span>
      <span className="WeatherInfoLabel">Weather Info</span>
      <div className="WeatherInfoContainer">
        <WeatherInfoComponent
          name={isDay ? "sunset" : "sunrise"}
          value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}
        />
        <WeatherInfoComponent
          name={"humidity"}
          value={weather?.main?.humidity}
        />
        <WeatherInfoComponent name={"wind"} value={weather?.wind?.speed} />
        <WeatherInfoComponent
          name={"pressure"}
          value={weather?.main?.pressure}
        />
      </div>
    </div>
  );
};
