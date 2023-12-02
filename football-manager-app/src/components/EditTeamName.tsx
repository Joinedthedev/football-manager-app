import React from "react";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import styles from "@/styles/RosterSection.module.css";
import PenIcon from "../assets/component-assets/PenIcon";

const EditTeamName = () => {
  const [teamName, setTeamName] = useState<string>("My Team");
  const [editTeamNameMode, setEditTeamNameMode] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamName(e.target.value);
  };

  const handleEditClick = () => {
    setEditTeamNameMode(true);
  };

  const handleKeyDown =(e:React.KeyboardEvent<HTMLInputElement>)=>{
    if(e.key === 'Enter'){
      setEditTeamNameMode(false)
    }
    

  }
  return (
    <div onClick={handleEditClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={styles.rosterDetails}>
      {" "}
      <p className={styles.rosterDetailsText}>Roster Details</p>
      {editTeamNameMode ? (
        <input
          className={styles.rosterEditTeamInput}
          type="text"
          value={teamName}
          onChange={handleChange}
          autoFocus={true}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <p className={styles.rosterMyTeam}>
          {teamName}
          <span className={`${!isHovering && !editTeamNameMode ? styles.rosterDisplayIcon : null }`}>
            <PenIcon />
          </span>
        </p>
      )}
    </div>
  );
};

export default EditTeamName;
