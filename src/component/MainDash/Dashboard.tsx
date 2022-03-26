import React, { useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Data, setTempType } from "../../redux/slice/Store";
import { Daily } from "../../type";
import { Button } from "../Button/Button";
import { RoundedButton } from "../Button/RoundedButton";
import { Paper } from "../Paper/Paper";
import { MainConCept } from "../MainDP/MainConCept";
import { Sunrise } from "../MainDP/Sunrise";
export const Dashboard = () => {
  const data = useAppSelector(Data);
  const optionsDisPlay = ["Today", "Week"];
  const [active, setActive] = useState<number>(0);
  const [activeOption, setActiveOption] = useState("Today");
  const [tempOption, setTempOption] = useState(0);

  const itemsData = useMemo(() => {
    if (activeOption === "Today") {
      return new Array(8)
        .fill("")
        .map((_, index) => data?.hourly[index * 3] as any);
    } else {
      return data && (data.daily as [Daily]);
    }
  }, [activeOption]);
  console.log(data);
  console.log(new Date((data?.current.dt as number) * 1000).getDay());
  const dispatch = useAppDispatch();
  return (
    <div className="bg-gray-100 h-[100vh] w-full p-7 overscroll-y-auto overflow-x-hidden">
      <div className="flex justify-between ">
        <div className="flex space-x-2">
          {optionsDisPlay.map((option, index) => {
            return (
              <div
                className="relative"
                key={index}
                onClick={() => {
                  setActiveOption(option);
                  setActive(index);
                }}
              >
                <Button active={active} Text={option} index={index} />
              </div>
            );
          })}
        </div>
        <div className="flex space-x-1">
          <div className="overflow-y-auto w-8 h-8 rounded-full">
            <a href="https://github.com/locloc408/weather-api">
              <img
                src={require(`../../asset/github.png`)}
                style={{
                  height: "100%",
                  width: "100%",
                }}
              />
            </a>
          </div>
          {["C", "F"].map((type, index) => {
            return (
              <div
                className={
                  "w-8 h-8 rounded-full flex justify-center items-center " +
                  (index === tempOption ? "bg-black" : "bg-white")
                }
                onClick={() => {
                  setTempOption(index);
                  dispatch(setTempType(type));
                }}
                key={index}
              >
                <RoundedButton
                  click={index === tempOption ? true : false}
                  type={type}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-8 grid-rows-1 p-10  gap-y-2 gap-x-2  ">
        {itemsData &&
          itemsData.map((item, index) => {
            return (
              <div key={index}>
                <Paper
                  dt={item?.dt}
                  temp={item?.temp}
                  weather={item?.weather}
                />
              </div>
            );
          })}
      </div>
      <div className="grid  grid-cols-3  grid-rows-2 gap-y-10 ">
        <MainConCept
          text={"UV Index"}
          description=""
          value={data?.daily[0].uvi as number}
          unit=""
          changePerTime={1}
        />
        <MainConCept
          Icon="direction.png"
          text={"Wind Speed"}
          description="168 degrees"
          value={data?.daily[0].wind_speed as number}
          unit="m/s"
          changePerTime={1}
        />
        <Sunrise
          value={{
            sunrise: data?.daily[0].sunrise as number,
            sunset: data?.daily[0].sunset as number,
          }}
          text={"Sunrise And Sunset"}
        />
        <MainConCept
          unit={"%"}
          description={"Normal"}
          value={data?.daily[0].humidity as number}
          text={"Humidity"}
          Icon={"humidity.png"}
          changePerTime={2}
        />
        <MainConCept
          unit={"km"}
          description={"Good For Eyes"}
          value={(data?.current.visibility as number) / 1000}
          text={"Visibiity"}
          Icon={"visibility.png"}
          changePerTime={1}
        />
        <MainConCept
          unit={"hPa"}
          description={"Normal"}
          value={data?.current.pressure as number}
          text={"Humidity"}
          Icon={"humidity.png"}
          changePerTime={100}
        />
      </div>
    </div>
  );
};
