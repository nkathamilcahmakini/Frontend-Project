import { useEffect, useState } from "react";
import { getData } from "../utilities/utils";


const useGetDataRecord = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getData();
      setData(response);
    };

    fetchData();
  }, []);

  return { data };
};

export default useGetDataRecord;
