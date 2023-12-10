import styles from "@/styles/FormationOverview.module.css";

const PlayerCard = () => {
  return (
    <div className={styles.playerCardContainer}>
      <div
        style={{ position:"absolute",width: "274px", height: "1px", backgroundColor: "#494949", top:"70%"}}
      ></div>
    </div>
  );
};

export default PlayerCard;
