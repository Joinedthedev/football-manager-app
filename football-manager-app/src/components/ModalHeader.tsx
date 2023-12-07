
import styles from "@/styles/Modal.module.css";
import CloseIcon from "../assets/component-assets/CloseIcon";
type ModalTitleProps = {
  title: string;
  onClose: ()=> void;
};

const ModalHeader = ({ title, onClose }: ModalTitleProps) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "7px" }}>
      <p className={styles.modalTitle}>{title}</p>
      <div style={{cursor:"pointer"}}onClick={onClose}>
        <CloseIcon />
      </div>
    </div>
  );
};

export default ModalHeader;
