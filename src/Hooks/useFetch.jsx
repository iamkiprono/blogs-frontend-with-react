import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if(!res.ok){
     return  setError(data.error)
      }
      setData(data);
    } catch (error) {
      console.log(error)
      setError(error.message);
    }
  };

  useEffect(() => {
    getData(url);
  }, [url]);
  return { data, error };
};

export default useFetch;
