import { useEffect, useRef, useState } from "react";

export const useDebounce = ({
  value,
  changePerTime,
}: {
  value: number;
  changePerTime: number;
}) => {
  const [result, setResult] = useState<number>(0);
  const interval = useRef<any>(null);
  useEffect(() => {
    interval.current = setInterval(() => {
      setResult((prev) => {
        let newvalue = prev + changePerTime;
        if (newvalue >= value) {
          window.clearInterval(interval.current);
          newvalue = value;
        }
        return newvalue;
      });
    }, 50);

    return () => {
      clearInterval(interval.current);
    };
  }, []);
  return {
    result,
  };
};
