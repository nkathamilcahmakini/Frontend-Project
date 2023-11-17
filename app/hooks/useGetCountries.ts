import { useEffect, useState } from "react";
import { getCountries } from "../utilities/utils";


const useGetCountries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getCountries();
      setData(response);
    };

    fetchData();
  }, []);

  return { data };
};

export default useGetCountries;
