import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
const CardUi = () => {
  return (
    <div className=" h-screen w-screen bg-[#2E3740]">
      <div className="flex items-center justify-center h-screen ">
        <div className="border-[1px] bg-white px-7 py-5 rounded-md">
          <div className="flex items-center">
            <input
              type="text"
              className=" border-[#2DBAF4] border-[1px] w-[20rem] outline-none overflow-hidden ml-[-15px] rounded-md pl-2 pr-10 py-2 text-sm"
            />
            <IoIosSearch className="ml-[-30px]" />
          </div>
          {/* weather icons */}
          <div className=" flex items-center justify-center py-2">
            <Image
              className="bg-[white]"
              src="/images/01d.png"
              width={100}
              height={100}
            />
          </div>
          {/* degree Celsius */}
          <div className=" flex items-center justify-center py-2 text-3xl font-extrabold">
            <p className="text-[#444141]">8°C</p>
          </div>

          <div className="flex items-center justify-center py-2 text-4xl font-bold">
            <p className="text-[#FEB60D] uppercase">London</p>
          </div>
          <div className="flex items-center justify-center text-xl font-bold">
            <p className="text-[#5c5b5b] uppercase">Gb</p>
          </div>
          {/* latitude,longitude */}
          <div className="flex items-center justify-center gap-10 py-3">
            {/* latitude */}
            <div className="flex flex-col items-center justify-center">
              <p className="">latitude</p>
              <p className=" font-bold text-[#444141] text-2xl">0</p>
            </div>
            {/* longitude */}

            <div className="flex flex-col items-center justify-center">
              <p className="">longitude</p>
              <p className="font-bold text-[#444141] text-2xl">0</p>
            </div>
          </div>

          {/* humidity, wind speed icons */}
          <div className=" flex justify-between">
            {/* humidity icon */}
            <div>
              <Image
                src="/images/humidity.png"
                width={100}
                height={100}
                className=""
              />
              <div className="flex flex-col items-center justify-center">
                <p className="">0%</p>
                <p>Humidity</p>
              </div>
            </div>
            {/* wind speed icon */}
            <div>
              <Image
                src="/images/windSpeed.png"
                width={100}
                height={100}
                className=""
              />
              <div className="flex flex-col items-center justify-center">
                <p className="">0 km/h</p>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
          {/* copy rights */}
          <p className=" flex items-center justify-center mt-3 text-[12px] -mb-1">
            Designed by
            <span className="ml-1  text-[15px] text-base font-semibold text-[#3a3939]">
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
