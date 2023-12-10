import styles from "@/styles/PlayerFormation.module.css";
import { usePlayerContext } from "./PlayerContext";
import { useState } from "react";

const PlayerFormation = () => {
  const {
    players,
    getContextStarterDefenders,
    getContextStarterFowards,
    getContextStarterGoalkeepers,
    getContextStarterMidfielders,
  } = usePlayerContext();

  const defenders = getContextStarterDefenders(players);
  const forwards = getContextStarterFowards(players);
  const goalkeepers = getContextStarterGoalkeepers(players);
  const midfielders = getContextStarterMidfielders(players);

  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);

  const handlePlayerClick = (playerId: string) => {
    setSelectedPlayer(playerId);
  };

  return (
    <div className={styles.playerFormationContainer}>
      <div
        id={styles["goal"]}
        
        
      >
        {goalkeepers.length > 0 && (
          <>
            <div onClick={() => handlePlayerClick(goalkeepers[0]?.Id || "")} className={`${styles.playerCircle} ${selectedPlayer === goalkeepers[0]?.Id ? styles.selected : ""}`}>
              <p>{goalkeepers[0].jerseyNumber!}</p>
            </div>
            <p className={styles.playerCircleName}>{goalkeepers[0].name}</p>
          </>
        )}
      </div>

      <div
        id={styles["defender-1"]}
        
        
      >
        {defenders.length > 0 && (
          <>
            <div onClick={() => handlePlayerClick(defenders[0]?.Id || "")} className={`${styles.playerCircle} ${selectedPlayer === defenders[0]?.Id ? styles.selected : ""}`}>
              <p>{defenders[0].jerseyNumber!}</p>
            </div>
            <p className={styles.playerCircleName}>{defenders[0].name}</p>
          </>
        )}
      </div>

      <div
        id={styles["defender-2"]}
       
      >
        {defenders.length > 1 && (
          <>
            <div onClick={() => handlePlayerClick(defenders[1]?.Id || "")}className={`${styles.playerCircle} ${selectedPlayer === defenders[1]?.Id ? styles.selected : ""}`}>
              <p>{defenders[1].jerseyNumber!}</p>
            </div>
            <p className={styles.playerCircleName}>{defenders[1].name}</p>
          </>
        )}
      </div>

      <div
        id={styles["defender-3"]}
       
      >
        {defenders.length > 2 && (
          <>
            <div onClick={() => handlePlayerClick(defenders[2]?.Id || "")}className={`${styles.playerCircle} ${selectedPlayer === defenders[2]?.Id ? styles.selected : ""}`}>
              <p>{defenders[2].jerseyNumber!}</p>
            </div>
            <p className={styles.playerCircleName}>{defenders[2].name}</p>
          </>
        )}
      </div>

      <div
        id={styles["defender-4"]}
        
      >
        {defenders.length > 3 && (
          <>
            <div onClick={() => handlePlayerClick(defenders[3]?.Id || "")}className={`${styles.playerCircle} ${selectedPlayer === defenders[3]?.Id ? styles.selected : ""}`}>
              <p>{defenders[3].jerseyNumber!}</p>
            </div>
            <p className={styles.playerCircleName}>{defenders[3].name}</p>
          </>
        )}
      </div>

      <div
        id={styles["midfielder-1"]}
      
       
      >
        {midfielders.length > 0 && (
          <>
            <div   onClick={() => handlePlayerClick(midfielders[0]?.Id || "")}className={`${styles.playerCircle} ${selectedPlayer === midfielders[0]?.Id ? styles.selected : ""}`}>
              <p>{midfielders[0].jerseyNumber!}</p>
            </div>
            <p className={styles.playerCircleName}>{midfielders[0].name}</p>
          </>
        )}
      </div>

      <div
        id={styles["midfielder-2"]}
       
      >
        {midfielders.length > 1 && (
          <>
            <div   onClick={() => handlePlayerClick(midfielders[1]?.Id || "")}className={`${styles.playerCircle} ${selectedPlayer === midfielders[1]?.Id ? styles.selected : ""}`}>
              <p>{midfielders[1].jerseyNumber!}</p>
            </div>
            <p className={styles.playerCircleName}>{midfielders[1].name}</p>
          </>
        )}
      </div>

      <div
        id={styles["midfielder-3"]}
       
      >
        {midfielders.length > 2 && (
          <>
            <div   onClick={() => handlePlayerClick(midfielders[2]?.Id || "")}className={`${styles.playerCircle} ${selectedPlayer === midfielders[2]?.Id ? styles.selected : ""}`}>
              <p>{midfielders[2].jerseyNumber!}</p>
            </div>
            <p className={styles.playerCircleName}>{midfielders[2].name}</p>
          </>
        )}
      </div>

      <div
        id={styles["forward-1"]}
      
       
      >
        {forwards.length > 0 && (
          <>
            <div   onClick={() => handlePlayerClick(forwards[0]?.Id || "")} className={`${styles.playerCircle} ${selectedPlayer === forwards[0]?.Id ? styles.selected : ""}`}>
              <p>{forwards[0].jerseyNumber!}</p>
            </div>
            <p className={styles.playerCircleName}>{forwards[0].name}</p>
          </>
        )}
      </div>

      <div
        id={styles["forward-2"]}
       
    
      >
        {forwards.length > 1 && (
          <>
            <div  onClick={() => handlePlayerClick(forwards[1]?.Id || "")} className={`${styles.playerCircle} ${selectedPlayer === forwards[1]?.Id ? styles.selected : ""}`}>
              <p>{forwards[1].jerseyNumber!}</p>
            </div>
            <p className={styles.playerCircleName}>{forwards[1].name}</p>
          </>
        )}
      </div>

      <div
        id={styles["forward-3"]}
        
      >
        {forwards.length > 2 && (
          <>
            <div  onClick={() => handlePlayerClick(forwards[2]?.Id || "")} className={`${styles.playerCircle} ${selectedPlayer === forwards[2]?.Id ? styles.selected : ""}`}>
              <p>{forwards[2].jerseyNumber!}</p>
            </div>
            <p className={styles.playerCircleName}>{forwards[2].name}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default PlayerFormation;
