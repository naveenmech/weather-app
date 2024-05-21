"use client";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
// import wea from "/Users/Naveenkumar Ayyasamy/Desktop/myDevelopement/weather-app/public/images/01d.png";
import { useEffect, useState } from "react";
const CardUi = () => {
  let api_key = "5b21c6ddae9ea0b374a2fd5a547681e2";
  // main state
  const [text, SetText] = useState("");
  console.log(text);
  const [weatherIcon, SetWeatherIcon] = useState(
    <Image src="/images/01d.png" width={80} height={80} />
  );
  const [degreeCelcius, SetDegreeCelcius] = useState(0);
  const [city, Setcity] = useState("Coimbatore");
  const [country, SetCountry] = useState("in");
  const [latitude, SetLatitude] = useState("0");
  const [longitude, SetLongitude] = useState("0");
  const [humidity, SetHumidity] = useState("0");
  const [windSpeed, SetWindSpeed] = useState("0");
  const [errorData, SetErrorData] = useState(true);

  // weather api
  const search = async () => {
    let NAVEEN_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=Metric`;
    try {
      const response = await fetch(NAVEEN_WEATHER_URL);
      const data = await response.json();
      console.log(data);
      SetDegreeCelcius(data.main.temp.toFixed(2));
      Setcity(data.name);
      SetCountry(data.sys.country);
      SetLatitude(data.coord.lat.toFixed(2));
      SetLongitude(data.coord.lon.toFixed(2));
      SetHumidity(data.main.humidity.toFixed(2));
      SetWindSpeed(data.wind.speed.toFixed(2));
      if (data.cod === "404") {
        console.log("City Not Found");
        // SetErrorData(false);
      }
    } catch (error) {
      console.log("An Error Occured: ", error.message);
    } finally {
    }
  };
  //handleCitySearch
  const handleCitySearch = (e) => {
    SetText(e.target.value);
  };
  //handleCitySearchDown
  const handleCitySearchDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };
  return (
    <div className=" h-screen w-screen bg-[#2E3740]">
      <div className="flex items-center justify-center h-screen ">
        <div className="border-[1px] bg-white px-7 py-5 rounded-md">
          <div className="flex items-center">
            {/* search */}
            <input
              type="text"
              className=" border-[#2DBAF4] border-[1px] w-[18rem] outline-none overflow-hidden ml-[-15px] rounded-md pl-2 pr-10 py-2 text-sm"
              onChange={handleCitySearch}
              value={text}
              onKeyDown={handleCitySearchDown}
            />
            <IoIosSearch onClick={() => search()} className="ml-[-30px]" />
          </div>
          {/* weather icons */}
          <div className=" flex items-center justify-center py-2">
            {/* <Image
              className="bg-[white]"
              src="/images/01d.png"
              width={80}
              height={80}
            /> */}
            {weatherIcon}
          </div>
          {/* degree Celsius */}
          <div className=" flex items-center justify-center py-2 text-3xl font-extrabold">
            <p className="text-[#444141]">{degreeCelcius}°C</p>
          </div>

          <div className="flex items-center justify-center py-2 text-4xl font-bold">
            <p className="text-[#FEB60D] uppercase">{city}</p>
          </div>
          <div className="flex items-center justify-center text-xl font-bold">
            <p className="text-[#5c5b5b] uppercase">{country}</p>
          </div>
          {/* latitude,longitude */}
          <div className="flex items-center justify-center gap-10 py-3">
            {/* latitude */}
            <div className="flex flex-col items-center justify-center">
              <p className="">latitude</p>
              <p className=" font-bold text-[#444141] text-2xl">{latitude}</p>
            </div>
            {/* longitude */}

            <div className="flex flex-col items-center justify-center">
              <p className="">longitude</p>
              <p className="font-bold text-[#444141] text-2xl">{longitude}</p>
            </div>
          </div>

          {/* humidity, wind speed icons */}
          <div className=" flex justify-between">
            {/* humidity icon */}
            <div>
              <Image
                src="/images/humidity.png"
                width={80}
                height={80}
                className=""
              />
              <div className="flex flex-col items-center justify-center">
                <p className="">{humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
            {/* wind speed icon */}
            <div>
              <Image
                src="/images/windSpeed.png"
                width={80}
                height={80}
                className=""
              />
              <div className="flex flex-col items-center justify-center">
                <p className="">{windSpeed} km/h</p>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
          {/* copy rights */}
          <p className=" flex items-center justify-center mt-3 text-[11px] -mb-1">
            Designed by
            <span className="ml-1 text-[13px] text-base font-semibold text-[#3a3939]">
              Naveenkumar A
            </span>
          </p>
          {/* white border end */}
        </div>
      </div>
    </div>
  );
};
export default CardUi;
