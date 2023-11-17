'use client'
import React, { useState, useEffect } from "react";
import { TbDropletFilled } from "react-icons/tb";
import { PiThermometerSimpleFill } from "react-icons/pi";
import useGetCalibrationProgress from "../../hooks/useGetCalibrationProgress";

const ProgressBar = () => {
  const [progress, setProgress] = useState({
    first: 0,
    second: 0,
    third: 0,
  });
  const [showTooltip, setShowTooltip] = useState({
    first: false,
    second: false,
    third: false,
  });

  const { data } = useGetCalibrationProgress();

  useEffect(() => {
    const interval = setInterval(() => {
      if (data && data[0]) {
        const thermometerValue = data[0].thermometer || 0;
        const raingaugeValue = data[0].raingauge || 0;
        const hygrometerValue = data[0].hygrometer || 0;

        if (progress.first < thermometerValue) {
          setProgress((prevProgress) => ({
            ...prevProgress,
            first: prevProgress.first + 1,
          }));
        }
        if (progress.second < raingaugeValue) {
          setProgress((prevProgress) => ({
            ...prevProgress,
            second: prevProgress.second + 1,
          }));
        }
        if (progress.third < hygrometerValue) {
          setProgress((prevProgress) => ({
            ...prevProgress,
            third: prevProgress.third + 1,
          }));
        }
      }
    }, 100);
  
    return () => {
      clearInterval(interval);
    };
  }, [progress, data]);

  const handleMouseEnter = (bar: string) => {
    setShowTooltip((prevShowTooltip) => ({
      ...prevShowTooltip,
      [bar]: true,
    }));
  };

  const handleMouseLeave = (bar: string) => {
    setShowTooltip((prevShowTooltip) => ({
      ...prevShowTooltip,
      [bar]: false,
    }));
  };

  return (
    <div className="ml-40 mt-2">
      <div className="w-80 h-10 mb-10 text-black text-2xl font-normal font-['Sanchez']">
        Instruments Calibration
      </div>
      <div className="flex flex-cols gap-10">
        <div className="ml-10">
          <div className="flex gap-1">
            <TbDropletFilled size={40} className="text-blue-400" />
            <PiThermometerSimpleFill size={40} className="text-blue-400" />
          </div>
        </div>
        <div className="w-24 h-5 text-black text-sm font-normal font-['Inter']">
          Instruments
        </div>
      </div>
      <div className="mt-11 w-10 space-y-5 h-16">
        <div className="w-28 h-6 text-black text-sm font-normal font-['Sanchez']">
          Thermometer
        </div>
        <div
          className="w-32 h-2 bg-amber-500 rounded-2xl"
          onMouseEnter={() => handleMouseEnter("first")}
          onMouseLeave={() => handleMouseLeave("first")}
        >
          <div
            className="bg-amber-500 h-2.5 rounded-full"
            style={{ width: `${progress.first}` }}
          ></div>
          {showTooltip.first && (
            <span className="tooltiptext">{`${progress.first}`}</span>
          )}
        </div>
        <div className="w-20 h-6 text-black text-sm font-normal font-['Sanchez']">
          Raingauge
        </div>
        <div
          className="w-96 h-2 bg-slate-500 rounded-2xl"
          onMouseEnter={() => handleMouseEnter("second")}
          onMouseLeave={() => handleMouseLeave("second")}
        >
          <div
            className="bg-slate-500 h-2.5 rounded-full dark-bg-slate-500"
            style={{ width: `${progress.second}` }}
          ></div>
          {showTooltip.second && (
            <span className="tooltiptext">{`${progress.second}`}</span>
          )}
        </div>
        <div className="w-24 h-6 text-black text-sm font-normal font-['Sanchez']">
          Hygrometer
        </div>
        <div
          className="w-64 h-2 bg-lime-200 rounded-2xl"
          onMouseEnter={() => handleMouseEnter("third")}
          onMouseLeave={() => handleMouseLeave("third")}
        >
          <div
            className="bg-lime-200 h-2.5 rounded-full dark-bg-lime-200"
            style={{ width: `${progress.third}` }}
          ></div>
          {showTooltip.third && (
            <span className="tooltiptext">{`${progress.third}`}</span>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProgressBar;