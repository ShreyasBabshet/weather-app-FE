import { useContext, useEffect } from "react";
import { AppContext, getDashboardData } from "../../App.state.tsx";
import LeftPanel from "../../components/LeftPanel/LeftPanel.tsx";
import RightPanel from "../../components/RightPanel/RightPanel.tsx";
import styles from "./Dashboard.module.scss";
import { DashboardProps } from "./Dashboard.types.ts";

const Dashboard = ({}: DashboardProps) => {
  return (
    <div className={styles.MainContainer}>
      <div className={styles.Left}>
        <LeftPanel />
      </div>
      <div className={styles.Right}>
        <RightPanel />
      </div>
    </div>
  );
};

export default Dashboard;
