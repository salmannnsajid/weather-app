import axios from "axios";
import React from "react";
import { toast } from "react-hot-toast";
import homeIcon from "../assets/icons/perfect-day.svg";

export const SelectLocation = ({ city, updateCity, updateWeather }) => {
  const fetchWeather = async () => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`
      );
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
        />
        <button className="button" onClick={fetchWeather}>
          Search
        </button>
      </div>
    </div>
  );
};
