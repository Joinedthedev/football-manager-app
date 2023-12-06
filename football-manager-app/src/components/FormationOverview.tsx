import React from "react";
import EditTeamName from "./EditTeamName";
import styles from "@/styles/FormationOverview.module.css";
const FormationOverview = () => {
  return (
    <div className={styles.formationContainer}>
      <div className={styles.formationTop}>
        <EditTeamName />
      </div>
      <div className={styles.formationFieldContainer}></div>
    </div>
  );
};

export default FormationOverview;
