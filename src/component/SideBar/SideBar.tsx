import React, { FC } from "react";
import { useAppSelector } from "../../redux/hooks";
import { Data, TempType } from "../../redux/slice/Store";
import { findDay, KenvinToC, KenvinToF } from "../../ultis/usefulFunc";
import { LottieComponent } from "../Lottie/LottieComponent";
export const SideBar: FC = () => {
  const data = useAppSelector(Data);
  const dayTime = () => {
    const time = new Date((data?.current.dt as number) * 1000);
    return `${findDay(
      time.getDay()
    )} : ${time.getHours()}:${time.getMinutes()}`;
  };
  const tempType = useAppSelector(TempType);
  return (
    <div className="min-w-[350px] min-h-[100%] shadow-lg p-[30px] overflow-y-auto">
      <div className="flex flex-col items-center justify-center">
        <div className="font-medium text-lg">Hồ Chí Minh City</div>
        <LottieComponent
          src={data && `lottie/${data?.current.weather[0].main}.json`}
          props={{
            style: {
              height: "200px",
              width: "200px",
            },
            play: true,
            loop: true,
          }}
        />
        <div className="flex">
          <div
            className="font-medium relative"
            style={{
              fontSize: "60px",
            }}
          >
            {tempType === "C"
              ? KenvinToC(data?.current.temp as number)
              : KenvinToF(data?.current.temp as number)}
            <div className="absolute top-0 -right-5 text-2xl">0</div>
          </div>

          <div
            style={{
              fontSize: "60px",
              marginLeft: "20px",
            }}
          >
            {tempType}
          </div>
        </div>
        <div>
          <p className="text-lg">{dayTime()}</p>
        </div>
        <div className="flex items-center">
          <div>
            <img
              width={100}
              height={100}
              src={
                data &&
                require(`../../asset/weather/${data?.current.weather[0].icon}.png`)
              }
            />
          </div>
          <div>
            <p>{data?.current.weather[0].main}</p>
            <p className="text-myGray">
              {data?.current.weather[0].description}
            </p>
          </div>
        </div>

        <div className="w-full">
          <img
            src={
              data &&
              require(`../../asset/MainWeather/${data.current.weather[0].main}.jpg`)
            }
            style={{
              width: "100%",
              height: "120px",
              borderRadius: "20px",
            }}
          />
        </div>
      </div>
    </div>
  );
};
