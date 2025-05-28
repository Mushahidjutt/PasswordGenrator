import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { BiWind } from "react-icons/bi";
import { LuWaves } from "react-icons/lu";
import { HiSun } from "react-icons/hi";
import { PiCloudSunFill } from "react-icons/pi";

const API = "adcfc4f3bef00cf239d4dd18364a090d";

const WeatherCard = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [search, setSearch] = useState(false);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`
      );
      const data = await response.json();
      setWeatherData(data);
      setSearch(true);
      console.log(data);
    } catch (error) {
      console.log("Error is ", error);
      setWeatherData(null);
      setSearch(true);
    }
  };

  useEffect(() => {
    if (city && search) {
      fetchWeatherData();
    }
  }, [city, search]);

  return (
    <div className="bg-gradient-to-t from-cyan-500 to-blue-400 mt-10 p-2 w-[400px] h-[360px] pt-4 rounded-2xl">
      <div className="flex flex-row justify-between items-center bg-white pl-2 pr-2 rounded-2xl mt-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Serach Weather"
          className="rounded-2xl outline-none p-2"
        />

        <button onClick={fetchWeatherData}>
          {" "}
          <FontAwesomeIcon
            className=" cursor-pointer "
            icon={faMagnifyingGlass}
          />{" "}
        </button>
      </div>

      {search && (
        <div>
          {weatherData ? (
            <div className="text-white">
              <div className="flex flex-col items-center text-5xl mt-5">
                {(weatherData?.main?.temp - 273.15)?.toFixed(2)}℃
              </div>
              <div className="flex flex-col items-center mt-4 text-xl">{weatherData?.name}</div>
              <div className="flex flex-row justify-between mt-10 text-xl px-4">
              <div className="flex flex-row items-center gap-x-3">
              <BiWind/>
              <p>{(weatherData?.wind?.speed *3.6)?.toFixed(2)} Kmph</p>
              </div>

              <div className="flex flex-row items-center gap-x-3">
              <LuWaves/>
              <p>{(weatherData?.main?.humidity)?.toFixed(2)} Kmph</p>
              </div>
              
              </div>
              <div className="flex flex-row justify-between mt-10 text-xl px-4">
              <div className="flex flex-row items-center gap-x-3">
              <HiSun/>
              <p>{ new Date(weatherData?.sys?.sunrise*1000)?.toLocaleTimeString([],{
                hour:"2-digit",
                minute:"2-digit"
              })}</p>
              </div>

              <div className="flex flex-row items-center gap-x-3">
              <PiCloudSunFill/>
              <p> {new Date(weatherData?.sys?.sunset*1000)?.toLocaleTimeString([],{
                hour:"2-digit",
                minute:"2-digit",
                hour12:true
              })}</p>
              </div>
              
              </div>

            </div>
          ) : (
            <div> Weather Not Found </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
