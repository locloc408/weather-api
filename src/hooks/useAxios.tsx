import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import queryString from "query-string";
interface useAxiosProp<T = any> {
  url: string;
  method: "put" | "get" | "post" | "request";
  dataRequest?: T;
}
export const useAxios = ({ url, method, dataRequest }: useAxiosProp) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>();
  const fetch = async () => {
    const { data } = await axios[method](
      url,
      method === "post" || (method === "put" && dataRequest)
    );
    if (data) {
      setLoading(false);
    }
    setData(data);
  };

  useEffect(() => {
    setLoading(true);
    fetch();
  }, [url]);
  return {
    loading,
    data,
  };
};
