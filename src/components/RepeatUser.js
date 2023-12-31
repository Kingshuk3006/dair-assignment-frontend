import React from "react";
import styles from "@/styles/status.module.scss";

const RepeatUser = ({userCount, percentage, increase, fromMonth}) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_left}>
        <div className={styles.container_left_top}>
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="64" height="64" rx="32" fill="#7950F2" />
            <path
              d="M29.5 35.0152C33.5668 35.0152 37 35.6844 37 38.2687C37 40.8531 33.5448 41.5 29.5 41.5C25.4332 41.5 22 40.8298 22 38.2464C22 35.6621 25.4542 35.0152 29.5 35.0152ZM38.999 27.5C39.4952 27.5 39.8979 27.9094 39.8979 28.4116V29.5879H41.101C41.5962 29.5879 42 29.9973 42 30.4995C42 31.0016 41.5962 31.4111 41.101 31.4111H39.8979V32.5884C39.8979 33.0906 39.4952 33.5 38.999 33.5C38.5038 33.5 38.1 33.0906 38.1 32.5884V31.4111H36.899C36.4027 31.4111 36 31.0016 36 30.4995C36 29.9973 36.4027 29.5879 36.899 29.5879H38.1V28.4116C38.1 27.9094 38.5038 27.5 38.999 27.5ZM29.5 22.5C32.2546 22.5 34.4626 24.7366 34.4626 27.5268C34.4626 30.3171 32.2546 32.5537 29.5 32.5537C26.7454 32.5537 24.5374 30.3171 24.5374 27.5268C24.5374 24.7366 26.7454 22.5 29.5 22.5Z"
              fill="white"
            />
          </svg>
          <span>Repeat User</span>
        </div>
        <div className={styles.container_left_bottom}>
        <p style={increase ? { color: "green" } : { color: "red" }}>
            <span>{increase ? "+" : "-"}</span>
            {percentage}
          </p>
          <span> From {fromMonth}</span>
        </div>
      </div>
      <div className={styles.container_right}>
        <h1>{userCount}</h1>
      </div>
    </div>
  );
};

export default RepeatUser;
