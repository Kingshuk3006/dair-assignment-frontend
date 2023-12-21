import React from "react";
import styles from "@/styles/Activities.module.scss";

const RecentActivity = () => {
  return (
    <div className={styles.recentActivity_container}>
      <div className={styles.recentActivity_container_heading}>
        <h3>Recent Activities</h3>
        <a href="/">view all</a>
      </div>
      <div className={styles.notification_container}>
        <div className={styles.notification}>
          <img src={"/icons/notification.png"} width={55} height={55} />
          <div className={styles.notification_right}>
            <div className={styles.notification_button}>
              <span>11:20</span>
              <span>11:20</span>
              <span>11:20</span>
            </div>
            <p>
              You might remember the Dell computer commercials in which a youth
              reports this exciting news to his friends that they are about to
              get their new computer.
            </p>
          </div>
        </div>
        <div className={styles.notification}>
          <img src={"/icons/notification.png"} width={55} height={55} />
          <div className={styles.notification_right}>
            <div className={styles.notification_button}>
              <span>11:20</span>
              <span>11:20</span>
              <span>11:20</span>
            </div>
            <p>
              You might remember the Dell computer commercials in which a youth
              reports this exciting news to his friends that they are about to
              get their new computer.
            </p>
          </div>
        </div>
        <div className={styles.notification}>
          <img src={"/icons/notification.png"} width={55} height={55} />
          <div className={styles.notification_right}>
            <div className={styles.notification_button}>
              <span>11:20</span>
              <span>11:20</span>
              <span>11:20</span>
            </div>
            <p>
              You might remember the Dell computer commercials in which a youth
              reports this exciting news to his friends that they are about to
              get their new computer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
