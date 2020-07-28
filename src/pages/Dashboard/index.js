import React from "react";
import styles from "../../styles/dashboard.module.css";
import Card from './Card'
const Dashboard = () => {
  return (
      <div className={styles.dashboard}>
        <Card />
    </div>
  );
};
export default Dashboard;
