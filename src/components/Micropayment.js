import React, { useEffect, useState } from "react";
import styles from "@/styles/Payment.module.scss";
import { Chart } from "primereact/chart";

const Micropayment = ({ microPayment }) => {
  const allUser = microPayment?.GraphData.map((data) => {
    return data.User;
  });
  const allTimes = microPayment?.GraphData.map((data) => {
    return data.Time;
  });
  const data = {
    labels: allTimes,

    datasets: [
      {
        label: "Users",
        data: allUser,
        fill: false,
        borderColor: "#7882a4",
        tension: 0.4,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    aspectRatio: 1,

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
        beginAtZero: true, // Start the Y-axis at zero
        ticks: {
          stepSize: 20, // Adjust the step size of Y-axis ticks
        },
      },
    },
  };
  return (
    <div className={styles.micropayment_container}>
      <div className={styles.micropayment_heading}>
        <section>
          <h3>Micropayments</h3>
          <h4>Revenue</h4>
          <h5>${microPayment.Total}</h5>
        </section>
        <svg
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="46" height="46" rx="23" fill="#E8E9FF" />
          <path
            d="M23 25.5C24.3807 25.5 25.5 24.3807 25.5 23C25.5 21.6193 24.3807 20.5 23 20.5C21.6193 20.5 20.5 21.6193 20.5 23C20.5 24.3807 21.6193 25.5 23 25.5Z"
            fill="#7950F2"
          />
          <path
            d="M32.3372 22.7875C31.6021 20.886 30.326 19.2416 28.6665 18.0576C27.007 16.8735 25.0369 16.2016 22.9997 16.125C20.9626 16.2016 18.9925 16.8735 17.333 18.0576C15.6735 19.2416 14.3973 20.886 13.6622 22.7875C13.6126 22.9248 13.6126 23.0752 13.6622 23.2125C14.3973 25.114 15.6735 26.7584 17.333 27.9424C18.9925 29.1265 20.9626 29.7984 22.9997 29.875C25.0369 29.7984 27.007 29.1265 28.6665 27.9424C30.326 26.7584 31.6021 25.114 32.3372 23.2125C32.3869 23.0752 32.3869 22.9248 32.3372 22.7875ZM22.9997 27.0625C22.1962 27.0625 21.4108 26.8242 20.7427 26.3778C20.0747 25.9315 19.554 25.297 19.2465 24.5547C18.939 23.8123 18.8585 22.9955 19.0153 22.2074C19.172 21.4194 19.559 20.6955 20.1271 20.1274C20.6953 19.5592 21.4191 19.1723 22.2072 19.0156C22.9952 18.8588 23.8121 18.9393 24.5544 19.2467C25.2967 19.5542 25.9312 20.0749 26.3776 20.743C26.824 21.4111 27.0622 22.1965 27.0622 23C27.0606 24.0769 26.632 25.1093 25.8705 25.8708C25.109 26.6323 24.0767 27.0608 22.9997 27.0625Z"
            fill="#7950F2"
          />
        </svg>
      </div>
      <div>
        <Chart type="line" data={data} options={options} />
      </div>
    </div>
  );
};

export default Micropayment;
