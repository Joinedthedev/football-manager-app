import EditTeamName from "./EditTeamName";
import styles from "@/styles/FormationOverview.module.css";
import Field from "@/assets/Field.png";
import PlayerCardEmpty from "./PlayerCardEmpty";
import PlayerCard from "./PlayerCard";
import { usePlayerContext } from "./PlayerContext";
import FormationOverviewModal from "./FormationOverviewModal";
import { useState, useEffect } from "react";
import PlayerFormation from "./PlayerFormation";
import TopRosterText from "./TopRosterText";

const FormationOverview = () => {
  const {
    

    numberOfGoalkeepers,
    numberOfMidfielders,
    numberOfDefenders,
    numberOfFowards,
    selectedPlayerContext,
    players
  } = usePlayerContext();

  const [tooManyStarters, setTooManyStarters] = useState<boolean>(false);
  const [notEnoughStarters, setNotEnoughStarters] = useState<boolean>(false);

  useEffect(() => {
    if (
      numberOfDefenders! > 4 ||
      numberOfGoalkeepers! > 1 ||
      numberOfMidfielders! > 3 ||
      numberOfFowards! > 3
    ) {
      setTooManyStarters(true);
    } else {
      setTooManyStarters(false);
    }

    if (
      numberOfDefenders! < 4 ||
      numberOfGoalkeepers! < 1 ||
      numberOfMidfielders! < 3 ||
      numberOfFowards! < 3
    ) {
      setNotEnoughStarters(true);
    } else {
      setNotEnoughStarters(false);
    }

    if (
      numberOfDefenders == 4 &&
      numberOfGoalkeepers === 1 &&
      numberOfMidfielders === 3 &&
      numberOfFowards === 3
    ) {
      setNotEnoughStarters(false);
      setTooManyStarters(false);
    }
  }, [
    numberOfDefenders,
    numberOfGoalkeepers,
    numberOfMidfielders,
    numberOfFowards,
  ]);

  return (
    <div className={styles.formationContainer}>
      <div className={styles.formationTop}>
        <div>
          <TopRosterText text="Formation Overview" />
          <EditTeamName />
        </div>
      </div>
      <div className={styles.formationFieldContainer}>
        {" "}
        <div className={styles.formationFieldImgContainer}>
          <img className={styles.formationFieldImg} src={Field} alt="" />
        </div>
        {!selectedPlayerContext || notEnoughStarters || tooManyStarters ? (
          <PlayerCardEmpty />
        ) : (
          <PlayerCard playerId={selectedPlayerContext!} />
        )}
        {players.length<1 ? (
          <FormationOverviewModal
            title="No player data found"
            text="Please import your roster first."
          />
        ) : tooManyStarters ? (
          <FormationOverviewModal
            title="There are too many starters"
            text="Your team has too many starters for one or more of the positions in the 4-3-3 formation."
          />
        ) : notEnoughStarters ? (
          <FormationOverviewModal
            title="There are not enough starters"
            text="Your team doesn’t have enough starters for one or more of the positions in the 4-3-3 formation"
          />
        ) : (
          <PlayerFormation />
        )}
      </div>
    </div>
  );
};

export default FormationOverview;
