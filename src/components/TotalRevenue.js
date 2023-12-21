import React from "react";
import styles from "@/styles/status.module.scss";

const TotalRevenue = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_left}>
        <div className={styles.container_left_top}>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="64" height="64" rx="32" fill="#7950F2"/>
<path d="M32 42.75C26.07 42.75 21.25 37.93 21.25 32C21.25 26.07 26.07 21.25 32 21.25C37.93 21.25 42.75 26.07 42.75 32C42.75 37.93 37.93 42.75 32 42.75Z" fill="white"/>
<path d="M33.4002 37.42H30.8902C29.2502 37.42 27.9202 36.04 27.9202 34.34C27.9202 33.93 28.2602 33.59 28.6702 33.59C29.0802 33.59 29.4202 33.93 29.4202 34.34C29.4202 35.21 30.0802 35.92 30.8902 35.92H33.4002C34.0502 35.92 34.5902 35.34 34.5902 34.64C34.5902 33.77 34.2802 33.6 33.7702 33.42L29.7402 32C28.9602 31.73 27.9102 31.15 27.9102 29.36C27.9102 27.82 29.1202 26.58 30.6002 26.58H33.1102C34.7502 26.58 36.0802 27.96 36.0802 29.66C36.0802 30.07 35.7402 30.41 35.3302 30.41C34.9202 30.41 34.5802 30.07 34.5802 29.66C34.5802 28.79 33.9202 28.08 33.1102 28.08H30.6002C29.9502 28.08 29.4102 28.66 29.4102 29.36C29.4102 30.23 29.7202 30.4 30.2302 30.58L34.2602 32C35.0402 32.27 36.0902 32.85 36.0902 34.64C36.0802 36.17 34.8802 37.42 33.4002 37.42Z" fill="#7950F2"/>
<path d="M32 38.75C31.59 38.75 31.25 38.41 31.25 38V26C31.25 25.59 31.59 25.25 32 25.25C32.41 25.25 32.75 25.59 32.75 26V38C32.75 38.41 32.41 38.75 32 38.75Z" fill="#7950F2"/>
</svg>

          <span>Total Revenue</span>
        </div>
        <div className={styles.container_left_bottom}>
          <p style={{ color: "green" }}>+23.8</p>
          <span> From October</span>
        </div>
      </div>
      <div className={styles.container_right}>
        <h1>$163</h1>
      </div>
    </div>
  );
};

export default TotalRevenue;
