import { Chart } from "primereact/chart";
import React from "react";
import styles from "@/styles/Analytics.module.scss";

const RevenueChart = ({revenueGraph}) => {
  const graphData = revenueGraph?.GraphData.map((data) => {
    return data.Revenue;
  });
  const data = {
    labels: [
      2013, 2014, 2015, 2016, 2017, 2018, 2019
    ],
    datasets: [
      {
        label: "Revenue",
        backgroundColor: "#e8e9ff",
        hoverBackgroundColor: "#9058ff",
        data: graphData,
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
        <h4>{revenueGraph.Total}</h4>
      </div>
      <div>
        <Chart type="bar" data={data} options={options} />
      </div>
    </div>
  );
};

export default RevenueChart;
