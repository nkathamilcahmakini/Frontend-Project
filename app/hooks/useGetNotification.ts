import { useEffect, useState } from "react";
import { getNotification } from "../utilities/utils";


const useGetNotification = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getNotification();
      setData(response);
    };

    fetchData();
  }, []);

  return { data };
};

export default useGetNotification;
