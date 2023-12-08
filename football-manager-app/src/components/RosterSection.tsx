import styles from "@/styles/RosterSection.module.css";
import PlayerStatLabels from "./PlayerStatLabels";
import EditTeamName from "./EditTeamName";
import ImportTeamModal from "./ImportTeamModal";
import { useState } from "react";
import PlayerRoster from "./PlayerRoster";
import { usePlayerContext } from "./PlayerContext";
import EditPlayerModal from "./EditPlayerModal";

/** The roster component for this app. ALL STYLES CAN BE FOUND IN src/styles/RosterSection.module.css */
const RosterSection = () => {
  const { players } = usePlayerContext();
  const { isRosterImported } = usePlayerContext();
  const { isEditPlayerModalIsOpen1, setIsEditPlayerModalIsOpen1 } =
    usePlayerContext();
  const { setSearch } = usePlayerContext();

  const [importTeamModalIsOpen, setImportTeamModalIsOpen] =
    useState<boolean>(false);

  const [trackInput, setTrackInput] = useState<string>("");

  const handleOpenImportTeamModal = () => {
    setImportTeamModalIsOpen(true);
  };

  const handleCloseImportTeamModal = () => {
    setImportTeamModalIsOpen(false);
  };

  const handleCloseEditPlayerModal = () => {
    setIsEditPlayerModalIsOpen1(false);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      setSearch(e.currentTarget.value);
    }

    if (e.key== "Escape"){
      setTrackInput("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTrackInput(value);
  };

  const handleClick = () =>{

    setSearch(trackInput);
  }

  return (
    <div className={styles.rosterContainer}>
      <div className={styles.rosterTop}>
        <EditTeamName />
        <div className={styles.rosterTopRight}>
          {/* <form onSubmit={handleSubmit}> */}
            <input
              placeholder={" Find Player"}
              className={styles.rosterInput}
              type="text"
              value={trackInput}
              onKeyDown={handleKeyDown}
              onChange={handleChange}
            />
            {trackInput.length > 0 ? (
              <button type="submit" onClick={handleClick} className={styles.rosterSearchButton}> Search</button>
            ) : null}
          {/* </form> */}
          {players.length > 0 && isRosterImported ? (
            <button
              onClick={handleOpenImportTeamModal}
              className={styles.rosterButtonReImport}
            >
              {" "}
              Re-Import Team
            </button>
          ) : (
            <button
              onClick={handleOpenImportTeamModal}
              className={styles.rosterButton}
            >
              {" "}
              Import Team
            </button>
          )}
        </div>
      </div>
      <div className={styles.rosterPlayerContainer}>
        <PlayerStatLabels />
        {players.length > 0 && isRosterImported ? (
          <>
            <PlayerRoster />
          </>
        ) : (
          <>
            <PlayerStatLabels />
            <div className={styles.rosterNoRosterContainer}>
              {" "}
              <p className={styles.rosterNoRosterText}>
                You do not have any players on the roster
              </p>{" "}
              <p
                onClick={handleOpenImportTeamModal}
                className={styles.rosterImportTeamText}
              >
                {" "}
                Import Team
              </p>
            </div>
          </>
        )}
      </div>
      {importTeamModalIsOpen && (
        <ImportTeamModal
          open={importTeamModalIsOpen}
          onClose={handleCloseImportTeamModal}
        />
      )}
      <EditPlayerModal
        open={isEditPlayerModalIsOpen1}
        onClose={handleCloseEditPlayerModal}
      />
    </div>
  );
};

export default RosterSection;
