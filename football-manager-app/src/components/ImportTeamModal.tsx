import React from "react";
import styles from "@/styles/Modal.module.css";
import ReactDom from "react-dom";
import ModalHeader from "./ModalHeader";
import ModalLine from "../assets/component-assets/ModalLine";
import Papa from "papaparse";
import { useState, ChangeEvent } from "react";

type ImportTeamModalProps = {
  open: boolean;
  onClose: () => void;
};

type Player = {
  name: string;
  goals: number;
};

const ImportTeamModal = ({ open, onClose }: ImportTeamModalProps) => {
  const [importedData, setImportedData] = useState<Player[]>([]);
  const [error, setError] = useState<string | null>(null); //error can either be null or a string and its initial state is null
  const [fileName, setFileName] = useState<string>("");
  
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }

    if (!file.name.endsWith(".csv")) {
      setError("Invalid file format. Please select a .csv file.");
      return;
    }

    if (file) {
      Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        complete: function (result) {
          console.log(result);
        },
      });
    }
  };

  return ReactDom.createPortal(
    <>
      {open && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalStyles}>
            <ModalHeader title={"Importer"} onClose={onClose} />
            <ModalLine />
     
            <div className={styles.modalImportButtonContainer}> 
<p className={styles.modalFileName}>Import text here</p>
                <button className={styles.modalImportButton}>
                      Select File  
                      </button>
            </div>
                <input
             
                  className={styles.modalInput}
                  type="file"
                  onChange={handleFile}
                  
                />
               
          
            <p className={styles.modalErrorText}></p>
          </div>
        </div>
      )}
    </>,
    document.getElementById("portal")!
  );
};

export default ImportTeamModal;
