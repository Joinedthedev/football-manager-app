import React from "react";
import styles from "@/styles/RosterSection.module.css";
import PenIcon from "../assets/component-assets/PenIcon";
import { usePlayerContext } from "./PlayerContext";

const EditTeamName = () => {
  const {teamName, setTeamName} = usePlayerContext();
  const {editTeamNameMode, setEditTeamNameMode} = usePlayerContext();
  const {isHovering, setIsHovering} = usePlayerContext();
  const {teamNameHasBeenEdited, setTeamNameHasBeenEdited} = usePlayerContext();

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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setEditTeamNameMode(false);
      setTeamNameHasBeenEdited(true);
    }
  };
  return (
    <div
      onClick={handleEditClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className={styles.rosterDetails}
    >
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
          <span
            className={`${
              !isHovering && !editTeamNameMode && teamNameHasBeenEdited
                ? styles.rosterDisplayIcon
                : null
            }`}
          >
            <PenIcon />
          </span>
        </p>
      )}
    </div>
  );
};

export default EditTeamName;
