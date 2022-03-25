import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getData, IsLoading } from "../../redux/slice/Store";
import { Loading } from "../Loading/loading";
export const Wrapper: FC = ({ children }) => {
  const isLoading = useAppSelector(IsLoading);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div className="flex w-[100vw] min-h-[100vh] ">
      {isLoading === true ? <Loading /> : children}
    </div>
  );
};
