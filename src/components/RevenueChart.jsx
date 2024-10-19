import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import Arrow from "../Icons/arrow up.png";
import DataSet from "../data/data.json";
function RevenueChart() {
  
  return (
    <>
      <div className="border-2 p-[20px] h-[400px] rounded-xl border-slate-300">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Revenue Report</h1>
          <select
            name=""
            id=""
            className="border-2  rounded-xl p-2 text-lg font-semibold outline-none"
          >
            <option value="" hidden>
              Select Month
            </option>
            <option value="">Jan,2024</option>
            <option value="">Feb,2024</option>
            <option value="">Mar,2024</option>
            <option value="">Apr,2024</option>
            <option value="">May,2024</option>
            <option value="">Jun,2024</option>
            <option value="">Jul,2024</option>
            <option value="">Aug,2024</option>
            <option value="">Sep,2024</option>
            <option value="">Oct,2023</option>
            <option value="">Nov,2023</option>
            <option value="">Dec,2023</option>
          </select>
        </div>
        <div className="flex gap-3 mt-[10px]">
          <h1 className="font-bold text-4xl">$500,000</h1>
          <div className="flex items-center ">
            <img src={Arrow} alt="arrow" className="h-5" />
            <h1 className="text-green-400 font-semibold text-lg">+235.21%</h1>
          </div>
        </div>
        <div className=" w-[530px] flex justify-center items-center mt-[20px]">
        <Bar className=" "
          data={{
            labels: DataSet.map((data)=>data.label),
            datasets: [
              {
                label: "Revenue",
                data: DataSet.map((data)=>data.value),
                backgroundColor: [
                  "blue",
                  "yellow",
                  
                ],
                
                borderRadius:15,
                borderSkipped: false,
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: false, // Hide legend
              },
            },
            scales: {
              x: {
                grid: {
                  display: false, 
                },
              },
              y: {
                
                grid: {
                  display: true,
                },
              },
            },
          }}
          
        
        />
        </div>
        
      </div>
    </>
  );
}

export default RevenueChart;
