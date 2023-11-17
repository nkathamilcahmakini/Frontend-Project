interface RecordData {
  instruments_readings: number;
  calibration_values: number;
  standard_values: number;
}

import { useEffect, useState } from "react";
import { getRecords } from "../utilities/utils";

const useGetRecord = () => {
  const [data, setData] = useState<RecordData[]>(); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getRecords();
      setData(response);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { data, loading };
};

export default useGetRecord;
