import { usePlayerContext } from "./PlayerContext";
import styles from "@/styles/PlayerRoster.module.css";
import PlayerDetails from "./PlayerDetails";
const PlayerRoster = () => {
  const { players } = usePlayerContext();
  const { search } = usePlayerContext();
  return (
    <div className={styles.playerRosterContainer}>
      <div className={styles.playerDirectContainer}>
        {players
          .filter((player) => {
            const isNameMatch = player.name
              .toLowerCase()
              .includes(search.toLowerCase());
            const isPositionMatch = player.position
              .toLowerCase()
              .includes(search.toLowerCase());

            return isNameMatch || isPositionMatch;
          })
          .map((player, index) => (
            <PlayerDetails key={index} player={player} />
          ))}
      </div>
    </div>
  );
};

export default PlayerRoster;
