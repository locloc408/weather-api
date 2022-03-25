import React from "react";
import { formatHourly } from "../../ultis/usefulFunc";
export const Sunrise = ({
  value,
  text,
}: {
  value: {
    sunrise: number;
    sunset: number;
  };
  text: string;
}) => {
  return (
    <div className="pl-10">
      <div
        className="w-[270px] h-[195px] p-[20px] bg-white relative flex flex-col justify-between"
        style={{
          borderRadius: "20px",
        }}
      >
        <p className="text-lg font-medium">{text}</p>
        <div>
          <div className="flex space-x-2 items-center">
            <img src={require("../../asset/today/sunrise.png")} alt="" />
            <div className="text-lg">{formatHourly(value.sunrise)}</div>
          </div>
          <div className="flex space-x-2 items-center">
            <img src={require("../../asset/today/sunset.png")} alt="" />
            <div className="text-lg">{formatHourly(value.sunset)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
