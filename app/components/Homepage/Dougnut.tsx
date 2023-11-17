'use client'
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import useGetRecord from '../../hooks/useGetRecords';

function Doughnut() {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const { data, loading } = useGetRecord();
  let myChart: Chart<"doughnut", number[], string> | undefined;

  useEffect(() => {
    if (chartRef.current && data && !loading) {
      const ctx = chartRef.current.getContext('2d');

      if (ctx) {
        if (myChart) {
          myChart.destroy();
        }

        myChart = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Instrument Reading', 'Calibration Value', 'Standard Value'],
            datasets: [
              {
                data: [data[0].instruments_readings, data[0].calibration_values, data[0].standard_values],
      
                borderColor: ['rgb(217, 249, 157)', 'rgb(255, 193, 7)', 'rgb(100, 181, 246)'],
                backgroundColor: ['rgb(217, 249, 157)', 'rgb(255, 193, 7)', 'rgb(100, 181, 246)'],
                borderWidth: [0.5, 0.5, 25],
              },
            ],
          },
          
          options: {
            plugins: {
              legend: {
                display: false,
              },
            },
            cutout: '80%',
          },
        });

      }
    }
  }, [data, loading]);

  return (
    <div className='-mr-80'>
      <div className=' ml-96 mt-2'>
        <div className="text-black text-2xl font-normal font-['Sanchez']">Data Records</div>
        <div className="w-64 text-neutral-400 text-sm font-normal font-['Sanchez']">Total number of Records per month</div>
      </div>
      <div className="flex  justify-center mt-8">
        <div className="w-60 h-60 relative">
          <div className="w-full h-full absolute flex justify-center items-center ml-48">
            <canvas id="myChart" ref={chartRef}></canvas>
          </div>
        </div>
        <div className="flex flex-col justify-end -scroll -ml-60 mb-8">
          <ul className="list-none p-0 m-0 flex flex-col space-y-2">
            {data && !loading && (
              <>
                <li className="flex items-center">
                  <span className="w-4 h-4 rounded-full bg-yellow-400"></span>
                  Calibration Value
                  <br />
                  {data[0].calibration_values}
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 rounded-full bg-blue-400"></span>
                  Standard Value
                  <br />
                  {data[0].standard_values}
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 rounded-full bg-lime-200"></span>
                  Instrument Reading
                  <br />
                  {data[0].instruments_readings}
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Doughnut;