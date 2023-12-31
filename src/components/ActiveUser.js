import React from "react";
import styles from "@/styles/status.module.scss";

const ActiveUser = ({ userCount, increase, percentage , fromMonth}) => {
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
              d="M32 35.25C33.7949 35.25 35.25 33.7949 35.25 32C35.25 30.2051 33.7949 28.75 32 28.75C30.2051 28.75 28.75 30.2051 28.75 32C28.75 33.7949 30.2051 35.25 32 35.25Z"
              fill="white"
            />
            <path
              d="M44.1384 31.7238C43.1828 29.2518 41.5238 27.1141 39.3664 25.5748C37.2091 24.0355 34.648 23.1621 31.9997 23.0625C29.3513 23.1621 26.7902 24.0355 24.6329 25.5748C22.4755 27.1141 20.8165 29.2518 19.8609 31.7238C19.7964 31.9023 19.7964 32.0977 19.8609 32.2762C20.8165 34.7482 22.4755 36.8859 24.6329 38.4252C26.7902 39.9645 29.3513 40.8379 31.9997 40.9375C34.648 40.8379 37.2091 39.9645 39.3664 38.4252C41.5238 36.8859 43.1828 34.7482 44.1384 32.2762C44.2029 32.0977 44.2029 31.9023 44.1384 31.7238ZM31.9997 37.2812C30.9551 37.2812 29.934 36.9715 29.0655 36.3912C28.1971 35.8109 27.5201 34.9861 27.1204 34.021C26.7207 33.056 26.6161 31.9941 26.8199 30.9697C27.0237 29.9452 27.5267 29.0042 28.2652 28.2656C29.0038 27.527 29.9449 27.024 30.9693 26.8202C31.9938 26.6164 33.0557 26.721 34.0207 27.1208C34.9857 27.5205 35.8105 28.1974 36.3909 29.0659C36.9712 29.9344 37.2809 30.9555 37.2809 32C37.2788 33.4 36.7216 34.7421 35.7317 35.732C34.7417 36.722 33.3997 37.2791 31.9997 37.2812Z"
              fill="white"
            />
          </svg>
          <span>Active User</span>
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

export default ActiveUser;
