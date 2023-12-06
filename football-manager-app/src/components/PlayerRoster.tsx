import React from "react";
import { usePlayerContext } from "./PlayerContext";
import styles from "@/styles/PlayerRoster.module.css";
import PlayerDetails from "./PlayerDetails";
const PlayerRoster = () => {
  const { players, deletePlayer, editPlayer } = usePlayerContext();
  return (
    <div className={styles.playerRosterContainer}>
      <div className={styles.playerDirectContainer}>
        {players.map((player) => (
          <PlayerDetails key={player.jerseyNumber} player={player} />
        ))}
      </div>
    </div>
  );
};

export default PlayerRoster;
