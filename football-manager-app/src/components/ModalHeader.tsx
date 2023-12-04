import React from "react";
import styles from "@/styles/Modal.module.css";
import CloseIcon from "../assets/component-assets/CloseIcon";
type ModalTitleProps = {
  title: string;
  onClose: ()=> void;
};

const ModalHeader = ({ title, onClose }: ModalTitleProps) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
      <p className={styles.modalTitle}>{title}</p>
      <div onClick={onClose}>
        <CloseIcon />
      </div>
    </div>
  );
};

export default ModalHeader;