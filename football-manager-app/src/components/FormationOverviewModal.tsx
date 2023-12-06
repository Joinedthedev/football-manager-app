
import styles from "@/styles/Modal.module.css";
import CautionIcon from "../assets/component-assets/CautionIcon";

type FormationOverviewModalProps = {
  title: string;
  text: string;
};

const FormationOverviewModal = ({
  title,
  text,
}: FormationOverviewModalProps) => {
  return (
    <div className={styles.formationOverviewModalStyles}>
      <div className={styles.formationOverviewModalContainer}>
        {" "}
        <div className={styles.formationOverviewModalHeadingContainer}>
          <div>
            <CautionIcon />
          </div>{" "}
          <p className={styles.formationOverviewModalHeading}>{title}</p>
        </div>
        <p className={styles.formationOverviewModaltext}>{text}</p>
      </div>
    </div>
  );
};

export default FormationOverviewModal;
