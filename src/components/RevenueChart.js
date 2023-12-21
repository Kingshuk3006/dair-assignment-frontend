import { Chart } from "primereact/chart";
import React from "react";
import styles from "@/styles/Analytics.module.scss";

const RevenueChart = () => {
  const data = {
    labels: [
      "1-2",
      "2-3",
      "3-4",
      "4-5",
      "5-6",
      "6-7",
      "7-8",
      "8-9",
      "9-10",
      "10-11",
      "11-12",
    ],
    datasets: [
      {
        label: "Subscriber",
        backgroundColor: "#e8e9ff",
        data: [645, 459, 580, 681, 156, 455, 540, 345, 534, 123, 345],
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    aspectRatio: 0.75,
    barThickness: 10,

    scales: {
      x: {
        grid: {
          display: false, // Hide the X-axis gridlines
        },
      },
      y: {
        grid: {
          display: false, // Hide the X-axis gridlines
        },
        scales: {
          y: {
            beginAtZero: true, // Start the Y-axis at zero
            ticks: {
              stepSize: 100, // Adjust the step size of Y-axis ticks
            },
          },
        },
      },
    },
  };

  return (
    <div className={styles.revenueChart_container}>
      <div className={styles.overallanalytics_heading}>
        <h3>Reneue Chart</h3>
        <h4>4768.83.78K</h4>
      </div>
      <div>
        <Chart type="bar" data={data} options={options} />
      </div>
    </div>
  );
};

export default RevenueChart;
