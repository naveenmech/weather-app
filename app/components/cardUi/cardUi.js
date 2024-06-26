"use client";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
// import wea from "/Users/Naveenkumar Ayyasamy/Desktop/myDevelopement/weather-app/public/images/01d.png";

import { useEffect, useState } from "react";
const CardUi = () => {
  //api key
  let api_key = "5b21c6ddae9ea0b374a2fd5a547681e2";
  // main state
  const [text, SetText] = useState("karur");
  const [degreeCelcius, SetDegreeCelcius] = useState(0);
  const [city, Setcity] = useState("");
  const [country, SetCountry] = useState("in");
  const [latitude, SetLatitude] = useState("0");
  const [longitude, SetLongitude] = useState("0");
  const [humidity, SetHumidity] = useState("0");
  const [windSpeed, SetWindSpeed] = useState("0");
  const [weatherIcon, SetWeatherIcon] = useState(
    <Image src={"/images/01d.png"} height={50} width={50} />
  );
  const [cityNotFound, setCityNotFound] = useState(false);
  console.log(cityNotFound);
  const [errorData, SetErrorData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  //useEffect for initial rendering
  useEffect(() => {
    search();
  }, [errorData]);
  // icon
  const iconsMap = {
    "01d": <Image src={"/images/01d.png"} height={50} width={50} />,
    "01n": <Image src={"/images/01n.png"} height={50} width={50} />,
    "02d": <Image src={"/images/02d.png"} height={50} width={50} />,
    "02n": <Image src={"/images/02n.png"} height={50} width={50} />,
    "03d": <Image src={"/images/03d.png"} height={50} width={50} />,
    "03n": <Image src={"/images/03n.png"} height={50} width={50} />,
    "04d": <Image src={"/images/04d.png"} height={50} width={50} />,
    "04n": <Image src={"/images/04n.png"} height={50} width={50} />,
    "09d": <Image src={"/images/09d.png"} height={50} width={50} />,
    "09n": <Image src={"/images/09n.png"} height={50} width={50} />,
    "10d": <Image src={"/images/10d.png"} height={50} width={50} />,
    "10n": <Image src={"/images/10n.png"} height={50} width={50} />,
    "11d": <Image src={"/images/11d.png"} height={50} width={50} />,
    "11n": <Image src={"/images/11n.png"} height={50} width={50} />,
    "13d": <Image src={"/images/13d.png"} height={50} width={50} />,
    "13n": <Image src={"/images/13n.png"} height={50} width={50} />,
    "50d": <Image src={"/images/50d.png"} height={50} width={50} />,
    "50n": <Image src={"/images/50n.png"} height={50} width={50} />,
  };
  console.log(iconsMap);
  // weather api
  const search = async () => {
    setIsLoading(true);
    let NAVEEN_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=Metric`;
    try {
      const response = await fetch(NAVEEN_WEATHER_URL);
      const data = await response.json();
      console.log(data);
      //
      if (data.cod === "404") {
        console.log("City Not Found");
        setCityNotFound(true);
        setIsLoading(false);
        return;
        // SetErrorData(false);
      }

      SetDegreeCelcius(data.main.temp.toFixed(2));
      Setcity(data.name);
      SetCountry(data.sys.country);
      SetLatitude(data.coord.lat.toFixed(2));
      SetLongitude(data.coord.lon.toFixed(2));
      SetHumidity(data.main.humidity.toFixed(2));
      SetWindSpeed(data.wind.speed.toFixed(2));
      // store weather icon data in variable
      const weatherData = data.weather[0].icon;
      SetWeatherIcon(iconsMap[weatherData]);
      setCityNotFound(false);
    } catch (error) {
      console.log("An Error Occured: ", error.message);
      SetErrorData("Invalid data");
    } finally {
      setIsLoading(false);
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
          {!errorData && !cityNotFound && !isLoading && (
            <div>
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
                  <p className=" font-bold text-[#444141] text-2xl">
                    {latitude}
                  </p>
                </div>
                {/* longitude */}

                <div className="flex flex-col items-center justify-center">
                  <p className="">longitude</p>
                  <p className="font-bold text-[#444141] text-2xl">
                    {longitude}
                  </p>
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
              </div>{" "}
            </div>
          )}
          {errorData && (
            <div className="flex items-center justify-center text-[#646060] ">
              {errorData}
            </div>
          )}
          {isLoading && (
            <div className="flex items-center justify-center text-[#646060]">
              is Loading...
            </div>
          )}
          {cityNotFound && (
            <div className="flex items-center justify-center text-[#646060]">
              City Not Found
            </div>
          )}
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
