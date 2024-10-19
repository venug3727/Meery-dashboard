import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

function DayChart() {
  const data = {
    labels: ["13", "14", "15", "16", "17", "18", "19"],
    datasets: [
      {
        data: [100, 80, 120, 200, 150, 170, 90], // The values for each bar
        backgroundColor: function (context) {
          const index = context.dataIndex;
          return index === 3 ? "#A053F7" : "#A053F7"; // Highlight the bar for day 16
        },
        borderRadius: 10, // Rounded corners on the bars
        barThickness: 10, // Adjust thickness of the bars
        borderSkipped: false
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false, // Remove the grid lines for the X-axis
        },
      },
      y: {
        ticks: {
          display: false, // Remove the Y-axis labels
        },
        grid: {
          display: true,
          drawBorder: false, // Remove the border on the Y-axis
        },
      },
    },
    plugins: {
      legend: {
        display: false, // No legend required for this chart
      },
      tooltip: {
        enabled: true, // Show tooltips on hover
      },
    },
  };

  return (
    <div className=" " style={{ width: "300px", height: "200px" }}>
      <div className="flex items-center gap-3">
        <div className="text-3xl font-bold ">$215,200</div>
        <div className="bg-green-100 p-1 rounded-xl" style={{ color: "#00C48C", fontSize: "14px" }}>+23.1%</div>
      </div>
      <div className="mt-[10px] mb-[10px]" style={{ color: "#828282", fontSize: "12px" }}>16 May, 2023</div>
      <Bar data={data} options={options} />
    </div>
  );
}

export default DayChart;
