import React from "react";
import styles from "@/styles/RosterSection.module.css";
import PenIcon from "@/assets/Pen.svg";
import Button from "react-bootstrap/Button";
import MagnifyingGlass from "@/assets/MagGlassIcon.svg";

const RosterSection = () => {
  return (
    <div className={styles.rosterContainer}>
      <div className={styles.rosterTop}>
        <div className={styles.rosterDetails}>
          {" "}
          <p className={styles.rosterDetailsText}>Roster Details</p>
          <p className={styles.rosterMyTeam}>
            Input
            <span>
              {" "}
              <img style={{ paddingLeft: "8px" }} src={PenIcon} alt="" />
            </span>
          </p>
        </div>

        <div className={styles.rosterTopRight}>
          <input
            placeholder= {" Find Player"}
            className={styles.rosterInput}
            type="text"
          />

          <button className={styles.rosterButton}> Import Team</button>
        </div>
      </div>
    </div>
  );
};

export default RosterSection;
