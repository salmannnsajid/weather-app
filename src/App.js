import "./App.css";
import { useState } from "react";
import { Weather } from "./pages/Weather";
import { SelectLocation } from "./pages/SelectLocation";

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  return (
    <div className="container">
      <span className="appLabel">Weather App</span>
      {city && weather ? (
        <>
          <Weather weather={weather} />
          <button
            className="btn btn-primary"
            onClick={() => {
              updateCity();
              updateWeather();
            }}
          >
            Go Back
          </button>
        </>
      ) : (
        <SelectLocation
          city={city}
          updateCity={updateCity}
          updateWeather={updateWeather}
        />
      )}
    </div>
  );
}

export default App;
