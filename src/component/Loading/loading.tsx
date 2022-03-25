import React from "react";

export const Loading = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div
        style={{
          border: "10px solid #f3f3f3",
          borderTop: "10px solid #3498db",
          borderRadius: "50%",
          width: "80px",
          height: "80px",
        }}
        className="animate-spin"
      ></div>
    </div>
  );
};
