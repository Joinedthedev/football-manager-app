import styles from "@/styles/PlayerFormation.module.css";
import { usePlayerContext } from "./PlayerContext";

const PlayerFormation = () => {
  const {
    players,
    getContextStarterDefenders,
    getContextStarterFowards,
    getContextStarterGoalkeepers,
    getContextStarterMidfielders,
  } = usePlayerContext();

  const defenders = getContextStarterDefenders(players);
  const fowards = getContextStarterFowards(players);
  const goalkeepers = getContextStarterGoalkeepers(players);
  const midfielders = getContextStarterMidfielders(players);

  return (
    <div className={styles.playerFormationContainer}>
      <div id={styles["goal"]}>
        {goalkeepers.length > 0 && (
          <>
            <div className={styles.playerCircle}>
              <p>{goalkeepers[0].jerseyNumber!}</p>
            </div>
            <p className={styles.playerCircleName}>{goalkeepers[0].name}</p>
          </>
        )}
      </div>

      <div id={styles["defender-1"]}>
        {defenders.length > 0 && (
          <>
            <div className={styles.playerCircle}>
              <p>{defenders[0].jerseyNumber!}</p>
            </div>
            <p className={styles.playerCircleName}>{defenders[0].name}</p>
          </>
        )}
      </div>

      <div id={styles["defender-2"]}>
        {defenders.length > 1 && (
          <>
            <div className={styles.playerCircle}>
              <p>{defenders[1].jerseyNumber!}</p>
            </div>
            <p className={styles.playerCircleName}>{defenders[1].name}</p>
          </>
        )}
      </div>

      <div id={styles["defender-3"]}>
        {defenders.length > 2 && (
          <>
            <div className={styles.playerCircle}>
              <p>{defenders[2].jerseyNumber!}</p>
            </div>
            <p className={styles.playerCircleName}>{defenders[2].name}</p>
          </>
        )}
      </div>

      <div id={styles["defender-4"]}>
        {defenders.length > 3 && (
          <>
            <div className={styles.playerCircle}>
              <p>{defenders[3].jerseyNumber!}</p>
            </div>
            <p className={styles.playerCircleName}>{defenders[3].name}</p>
          </>
        )}
      </div>

      <div id={styles["midfielder-1"]}>
        {midfielders.length > 0 && (
          <>
            <div className={styles.playerCircle}>
              <p>{midfielders[0].jerseyNumber!}</p>
            </div>
            <p className={styles.playerCircleName}>{midfielders[0].name}</p>
          </>
        )}
      </div>

      <div id={styles["midfielder-2"]}>
        {midfielders.length > 1 && (
          <>
            <div className={styles.playerCircle}>
              <p>{midfielders[1].jerseyNumber!}</p>
            </div>
            <p className={styles.playerCircleName}>{midfielders[1].name}</p>
          </>
        )}
      </div>

      <div id={styles["midfielder-3"]}>
        {midfielders.length > 2 && (
          <>
            <div className={styles.playerCircle}>
              <p>{midfielders[2].jerseyNumber!}</p>
            </div>
            <p className={styles.playerCircleName}>{midfielders[2].name}</p>
          </>
        )}
      </div>

      <div id={styles["forward-1"]}>
        {fowards.length > 0 && (
          <>
            <div className={styles.playerCircle}>
              <p>{fowards[0].jerseyNumber!}</p>
            </div>
            <p className={styles.playerCircleName}>{fowards[0].name}</p>
          </>
        )}
      </div>

      <div id={styles["forward-2"]}>
        {fowards.length > 1 && (
          <>
            <div className={styles.playerCircle}>
              <p>{fowards[1].jerseyNumber!}</p>
            </div>
            <p className={styles.playerCircleName}>{fowards[1].name}</p>
          </>
        )}
      </div>

      <div id={styles["forward-3"]}>
        {fowards.length > 2 && (
          <>
            <div className={styles.playerCircle}>
              <p>{fowards[2].jerseyNumber!}</p>
            </div>
            <p className={styles.playerCircleName}>{fowards[2].name}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default PlayerFormation;
