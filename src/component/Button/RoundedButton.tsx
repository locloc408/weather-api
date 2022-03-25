import React from "react";

export const RoundedButton = ({
  type,
  click,
}: {
  type: string;
  click: boolean;
}) => {
  return (
    <div className="mt-1 ml-1 cursor-pointer">
      <div className="font-medium relative">
        <div
          className={
            "absolute top-0 left-0 " + (click ? "text-white" : "text-black")
          }
        >
          o
        </div>
      </div>

      <div
        className={"m-2 font-semibold " + (click ? "text-white" : "text-black")}
      >
        {type}
      </div>
    </div>
  );
};
