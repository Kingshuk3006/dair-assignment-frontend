import { Chart } from "primereact/chart";
import React from "react";
import styles from "@/styles/Analytics.module.scss";

const OverallAnalytics = ({ analyticsData }) => {
  const graphData = analyticsData?.GraphData.map((data) => {
    return data.Users;
  });

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Users",
        backgroundColor: "#9058ff",
       
        data: graphData,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    aspectRatio: 1,
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
    <div className={styles.overallanalytics_container}>
      <div className={styles.overallanalytics_heading}>
        <h3>Overall Analytics</h3>
        <h4>{analyticsData.Total}</h4>
      </div>
      <div>
        <Chart type="bar" data={data} options={options} />
      </div>
      <div className={styles.button_container}>
        <button className={styles.button_styles}>
          Number of stories published
        </button>
        <button className={styles.button_styles}>
          Number of stories published
        </button>
        <button className={styles.button_styles}>
          Number of stories published
        </button>
        <button className={styles.button_styles}>
          Number of stories published
        </button>
      </div>
    </div>
  );
};

export default OverallAnalytics;
