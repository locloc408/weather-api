import React, { FC } from "react";
interface ButtonProps {
  Text?: string;
  active?: number;
  index: number;
}
export const Button: FC<ButtonProps> = ({ Text, active, index, children }) => {
  return (
    <div
      className={active === index ? "font-semibold" : "text-myGray "}
      style={{
        cursor: "pointer",
        fontSize: "18px",
        fontWeight: "600",
      }}
    >
      {Text}
      {active === index && (
        <span className="absolute w-full bottom-0 h-[2px] left-0 bg-black"></span>
      )}
    </div>
  );
};
