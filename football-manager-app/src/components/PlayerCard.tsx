import { usePlayerContext } from "./PlayerContext";

import styles from "@/styles/PlayerCard.module.css";

type PlayerCardProps = {
  playerId: string;
};

type Player = {
  name: string;
  image: string;
  jerseyNumber: number;
  position: string;
  height: number;
  weight: number;
  nationality: string;
  flagImage: string;
  starter: string;
  appearances: number;
  minutesPlayed: number;
  goals: number;
  assists: number;
  cleanSheets: number;
  saves: number;
  Id: string;
};

const PlayerCard = ({ playerId }: PlayerCardProps) => {
  const { players } = usePlayerContext();
  const findPlayerById = (
    players: Player[],
    playerId: string
  ): Player | undefined => {
    return players.find((player) => player.Id === playerId);
  };

  const foundPlayer = findPlayerById(players, playerId);
  return (
    <div className={styles.playerCardContainer}>
      <div style={{ padding: "20px", zIndex: "1" }}>
        <div className={styles.playerNamePositionContainer}>
          <p className={styles.playerCardName}>{foundPlayer?.name}</p>
          <p className={styles.playerCardPosition}>{foundPlayer?.position}</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "40px",
          }}
        >
          {" "}
          <div className={styles.playerColumn}>
            <p className={styles.playerSubtitles}>Height</p>
            <p className={styles.playerSubtitlesBold}>{foundPlayer?.height}</p>
          </div>{" "}
          <div className={styles.playerColumn}>
            <p className={styles.playerSubtitles}>Weight</p>
            <p className={styles.playerSubtitlesBold}>{foundPlayer?.weight}</p>
          </div>{" "}
          <div className={styles.playerColumn}>
            <p className={styles.playerSubtitles}>Nationality</p>
            <p style={{ display: "flex" }}>
              <img
                style={{ width: "16px", height: "16px" }}
                src={foundPlayer?.flagImage}
              />
              <p className={styles.playerSubtitlesBold}>
                {foundPlayer?.nationality}
              </p>
            </p>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            width: "274px",
            height: "1px",
            backgroundColor: "#494949",
            top: "70%",
          }}
        ></div>
        <div className={styles.playerCardBottom}>
          <div style={{ display: "flex", alignItems: "center", gap: "50px" }}>
            <div className={styles.playerColumn}>
              <p className={styles.playerGrandTitle}>
                {foundPlayer?.appearances}
              </p>
              <p className={styles.playerSubtitles}> Appearances</p>
            </div>
            <div className={styles.playerColumn}>
              <p className={styles.playerGrandTitle}>
                {foundPlayer?.minutesPlayed}
              </p>
              <p className={styles.playerSubtitles}> Minutes Played</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "50px" }}>
            <div className={styles.playerColumn}>
              <p className={styles.playerGrandTitle}>
                {foundPlayer?.position === "Goalkeeper"
                  ? foundPlayer?.cleanSheets
                  : foundPlayer?.goals}
              </p>
              <p className={styles.playerSubtitles}>
                {" "}
                {foundPlayer?.position === "Goalkeeper"
                  ? "Clean Sheets"
                  : "Goals"}
              </p>
            </div>
            <div className={styles.playerColumn}>
              <p className={styles.playerGrandTitle}>
                {foundPlayer?.position === "Goalkeeper"
                  ? foundPlayer?.saves
                  : foundPlayer?.assists}
              </p>
              <p className={styles.playerSubtitles}>
                {" "}
                {foundPlayer?.position === "Goalkeeper" ? "Saves" : "Assists"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.playerImage} src={foundPlayer?.image} />
        <div className={styles.gradeintOverlay}></div>
      </div>
    </div>
  );
};

export default PlayerCard;
