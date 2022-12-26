import axios from "axios";
import React from "react";
import { toast } from "react-hot-toast";
import homeIcon from "../assets/icons/perfect-day.svg";

export const SelectLocation = ({ city, updateCity, updateWeather }) => {
  let url = `https://api.weatherapi.com/v1/current.json?key=b800d747e73340cf87861008222612&q=${city}`;
  // let openWeatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`;
  const fetchWeather = async () => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await axios.get(url);
      updateWeather(response.data);
      toast.success("Success", {
        id: toastId,
      });
    } catch (err) {
      toast.error("Error", {
        id: toastId,
      });
    }
  };
  return (
    <div className="select-location">
      <img alt="" className="WelcomeWeatherLogo" src={homeIcon} />
      <span className="ChooseCityLabel">Find Weather of your city</span>
      <div className="SearchBox">
        <input
          className="input"
          placeholder="City"
          onChange={(e) => updateCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              updateCity(e.target.value);
              setTimeout(() => {
                fetchWeather();
              }, 100);
            }
          }}
        />
        <button className="button" onClick={fetchWeather}>
          Search
        </button>
      </div>
    </div>
  );
};
