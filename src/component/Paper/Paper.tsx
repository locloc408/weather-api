import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { TempType } from "../../redux/slice/Store";
import {
  findDay,
  formatHourly,
  KenvinToC,
  KenvinToF,
} from "../../ultis/usefulFunc";
import { LottieComponent } from "../Lottie/LottieComponent";
export type Paper =
  | {
      dt?: number;
      weather: [
        {
          id: number;
          main: string;
          description: string;
          icon: string;
        }
      ];
      temp: {
        min: number;
        max: number;
      };
    }
  | {
      dt?: number;
      weather: [
        {
          id: number;
          main: string;
          description: string;
          icon: string;
        }
      ];
      temp: number;
    };
export const Paper: React.FC<Paper> = ({ dt, weather, temp }) => {
  const tempType = useAppSelector(TempType);
  console.log(new Date((dt as number) * 1000).getDay());
  console.log(findDay(1));
  return (
    <div className="rounded-lg h-[140px] w-[100px] flex justify-center items-center flex-col bg-white">
      {typeof temp === "number" ? (
        <div className="text-base">{formatHourly(dt as number)}</div>
      ) : (
        <div className="text-base">
          {findDay(new Date((dt as number) * 1000).getDay() as number)}
        </div>
      )}
      <LottieComponent
        props={{
          style: {
            width: "60px",
            height: "60px",
          },
          play: true,
        }}
        src={weather ? `lottie/${weather[0].main}.json` : ""}
      ></LottieComponent>
      {typeof temp === "number" ? (
        <div className="text-lg">
          {tempType === "C" ? KenvinToC(temp) : KenvinToF(temp)}
          <sup className="mt-2">o</sup>
        </div>
      ) : (
        <div className="flex">
          <div className="text-myGray">
            {tempType === "C"
              ? KenvinToC(temp && temp.min)
              : KenvinToF(temp && temp.min)}
          </div>
          <sup className="mt-2">o</sup>
          <div>
            {tempType === "C"
              ? KenvinToC(temp && temp.max)
              : KenvinToF(temp && temp.max)}
          </div>
          <sup className="mt-2">o</sup>
        </div>
      )}
    </div>
  );
};
