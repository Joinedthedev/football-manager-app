
import styles from "@/styles/PlayerDetails.module.css";

import { usePlayerContext } from "./PlayerContext";

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
  const { setIsEditPlayerModalIsOpen1 } =
    usePlayerContext();
    
    const handleClick = ()=>{
      setIsEditPlayerModalIsOpen1(true)
    }
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
          onClick={handleClick}
          style={{
            width: "0px",
            margin: "7px",
            fontSize: "16px",
            fontWeight: "900",
            cursor: "pointer",
          }}
        >
          ...
        </div>
      </div>
    </>
  );
};

export default PlayerDetails;
