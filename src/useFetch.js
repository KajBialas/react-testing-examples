import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [url]);

  return data;
};
