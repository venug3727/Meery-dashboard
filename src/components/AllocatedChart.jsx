import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function AllocatedChart() {
  const data = {
    labels: ["Unallocated", "Sale", "Sport"],
    datasets: [
      {
        data: [30, 30, 40], // Adjust the data to your needs
        backgroundColor: ["#B483F7", "#F98888", "#4C6EF5"],
        hoverBackgroundColor: ["#B483F7", "#F98888", "#4C6EF5"],
        borderRadius: 70,
        borderWidth: 2, // Remove border if you want that clean doughnut look
        cutout: "70%", // Adjust the thickness of the doughnut
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true, // Use circle legends like in the image
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="p-">
      <div
        className="border-2 rounded-xl pb-[90px]"
        style={{ width: "300px", height: "300px" }}
      >
        <h2 className="font-semibold text-2xl p-3">Allocated</h2>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}

export default AllocatedChart;
