import React from "react";
import styles from "@/styles/status.module.scss";

const NewUser = ({userCount, fromMonth, increase, percentage}) => {
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
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M29.5915 35.2068C33.2805 35.2068 36.4335 35.7658 36.4335 37.9988C36.4335 40.2318 33.3015 40.8068 29.5915 40.8068C25.9015 40.8068 22.7495 40.2528 22.7495 38.0188C22.7495 35.7848 25.8805 35.2068 29.5915 35.2068Z"
              fill="white"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M29.5916 32.0198C27.1696 32.0198 25.2056 30.0568 25.2056 27.6348C25.2056 25.2128 27.1696 23.2498 29.5916 23.2498C32.0126 23.2498 33.9766 25.2128 33.9766 27.6348C33.9856 30.0478 32.0356 32.0108 29.6226 32.0198H29.5916Z"
              fill="white"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M36.4832 30.8815C38.0842 30.6565 39.3172 29.2825 39.3202 27.6195C39.3202 25.9805 38.1252 24.6205 36.5582 24.3635"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M38.5955 34.7322C40.1465 34.9632 41.2295 35.5072 41.2295 36.6272C41.2295 37.3982 40.7195 37.8982 39.8955 38.2112"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>New User</span>
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

export default NewUser;
