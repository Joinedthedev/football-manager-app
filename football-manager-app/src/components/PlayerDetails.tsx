import React from "react";
import styles from "@/styles/PlayerDetails.module.css";
import { text } from "stream/consumers";

type PlayerDetailsProps = {
  player: {
    name: string;
    jerseyNumber: number;
    starter: string;
    height: number;
    weight: number;
    nationality: string;
    position: string;
    appearances: number;
    minutesPlayed: number;
    flagImage: string;
  };
};

const PlayerDetails = ({ player }: PlayerDetailsProps) => {
  return (
    <>
      <div className={styles.playerDetailsStyles}>
        <div className={styles.playerInfo}>
          <img
            className={styles.flagImage}
            src={player.flagImage}
            alt="Flag Image"
          />
          <div style={{ width: "200px" }}>{player.name}</div>
        </div>
        <div style={{ textAlign: "center", width: "100px" }}>
          {player.jerseyNumber}
        </div>
        <div style={{ textAlign: "center", width: "200px" }}>
          {player.starter}
        </div>
        <div>{player.position}</div>
        <div style={{ width: "150px" }}>
          {(player.height / 100).toFixed(2)}m
        </div>
        <div style={{ width: "150px" }}>{player.weight}kg</div>
        <div>{player.nationality}</div>

        <div style={{ textAlign: "center" }}>{player.appearances}</div>

        <div style={{ textAlign: "center" }}>{player.minutesPlayed} </div>
        <div
        
          style={{
            width: "0px",
            margin: "12px",
            fontSize: "16px",
            fontWeight: "900",
          }}
        >
          ...
        </div>
      </div>
    </>
  );
};

export default PlayerDetails;
