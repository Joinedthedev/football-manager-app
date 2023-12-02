import React from "react";
import styles from "@/styles/RosterSection.module.css";

const PlayerStatLabels = () => {
  return (
    <div className={styles.rosterPlayerStats}>
      <p>Player Name</p>
      <p> Jersey Number</p>
      <p>Starter</p>
      <p> Position</p>
      <p> Height</p>
      <p> Weight</p>
      <p> Nationality</p>
      <p>Appearances</p>
      <p>Minutes Played</p>
    </div>
  );
};

export default PlayerStatLabels;
