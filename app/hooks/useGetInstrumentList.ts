import { useEffect, useState } from "react";
import { getInstrumentList } from "../utilities/utils";

const useGetInstrumentList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getInstrumentList();
      setData(response);
    };

    fetchData();
  }, []);

  return { data };
};

export default useGetInstrumentList;
