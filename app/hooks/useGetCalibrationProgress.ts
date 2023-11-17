import { useEffect, useState } from "react";
import { getCalibratioProgress } from "../utilities/utils";

interface Records {
  thermometer: number,
  raingauge:number,
  hygrometer:number,
}
const useGetCalibrationProgress = () => {
  const [data, setData] = useState<Records[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getCalibratioProgress();
      setData(response);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { data, loading };
};

export default useGetCalibrationProgress;

