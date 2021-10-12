import React from "react";
import { Bar } from "react-chartjs-2";

const DistroGamingChart = ({ data }) => {
  const labels = ["Yes", "No"];

  const yesPercent = data.gaming;
  const noPercent = 100 - yesPercent;

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Percentage who play Video Games on Linux.",
        data: [yesPercent, noPercent],
        backgroundColor: ["#00ff00", "#ff0000"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="gaming-chart">
      <Bar
        data={chartData}
        options={{
          title: {
            display: true,
            text: "Linux Gaming Popularity",
            fontSize: 25,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};

export default DistroGamingChart;
