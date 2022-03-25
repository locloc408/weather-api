import React from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { Progress } from "../Progress/Progress";
export const MainConCept = ({
  value,
  text,
  description,
  unit,
  Icon,
  changePerTime,
}: {
  value: number;
  text: string;
  description: string;
  unit: string;
  Icon?: string;
  changePerTime: number;
}) => {
  const { result } = useDebounce({
    value,
    changePerTime: changePerTime,
  });
  return (
    <div className="pl-10">
      <div
        className="w-[270px] h-[195px] p-[20px] bg-white relative flex flex-col justify-between"
        style={{
          borderRadius: "20px",
        }}
      >
        <p className="text-lg font-medium">{text}</p>
        {text === "UV Index" && <Progress changePerTime={1} value={value} />}
        {text === "UV Index" ? (
          <div className="text-3xl font-semibold absolute left-1/2 bottom-3 -translate-x-1/2">
            <p>
              <span className="mr-[1px]">{result}</span>
            </p>
          </div>
        ) : (
          <div className="">
            <span
              style={{ fontSize: "50px" }}
              className="font-semibold mr-[3px]"
            >
              {result}
            </span>
            <span>{unit}</span>
          </div>
        )}

        <div className="flex space-x-2">
          {Icon && (
            <img
              height={20}
              width={20}
              src={Icon && require(`../../asset/today/${Icon as string}`)}
              alt=""
            />
          )}
          <div className="text-lg">{description}</div>
        </div>
      </div>
    </div>
  );
};
