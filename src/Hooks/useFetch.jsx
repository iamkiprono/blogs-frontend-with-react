import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getData(url);
  }, [url]);
  return { data, error };
};

export default useFetch;
