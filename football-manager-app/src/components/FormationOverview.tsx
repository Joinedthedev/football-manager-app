
import EditTeamName from "./EditTeamName";
import styles from "@/styles/FormationOverview.module.css";
import Field from "@/assets/Field.png";
import PlayerCard from "./PlayerCard";
import { usePlayerContext } from "./PlayerContext";
import FormationOverviewModal from "./FormationOverviewModal";
const FormationOverview = () => {
  const { isFile } = usePlayerContext();
  return (
    <div className={styles.formationContainer}>
      <div className={styles.formationTop}>
        <EditTeamName />
      </div>
      <div className={styles.formationFieldContainer}>
        {" "}
        {isFile ? (
          <>
            <div className={styles.formationFieldImgContainer}>
              <img className={styles.formationFieldImg} src={Field} alt="" />
            </div>
            <PlayerCard />
          </>
        ) : (
          <FormationOverviewModal title="No player data found" text="Please importer your roster first." />
        )}
      </div>
    </div>
  );
};

export default FormationOverview;
