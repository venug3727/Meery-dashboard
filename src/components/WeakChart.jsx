import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const WeakChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Sale",
        data: [30, 50, 40, 70, 80, 60, 50],
        backgroundColor: "#FF974B",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        borderRadius: 10,
        borderSkipped: false,
      },
      {
        label: "Sport",
        data: [20, 35, 25, 50, 45, 40, 30],
        backgroundColor: "#798AFF",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        borderRadius: 10,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
        },
      },
    },
  };

  return (
    <div style={{ width: "280px", height: "300px" }}>
      <h3 className="text-xl font-bold ">
        $215,200 <span className="text-sm font-normal bg-green-100 rounded-lg p-1" style={{ color: "#4CAF50" }}>+23.1%</span>
      </h3>
      <p>16 May, 2023</p>
      <div className="mt-[50px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default WeakChart;
