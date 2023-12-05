import React from "react";
import styles from "@/styles/Modal.module.css";
import ReactDom from "react-dom";
import ModalHeader from "./ModalHeader";
import ModalLine from "../assets/component-assets/ModalLine";
import Papa from "papaparse";
import { useState, useRef } from "react";
import Button from "./SecondaryButton";
import SecondaryButton from "./SecondaryButton";

type ImportTeamModalProps = {
  open: boolean;
  onClose: () => void;
};

type Player = {
  name: string;
  goals: number;
};

const ImportTeamModal = ({ open, onClose }: ImportTeamModalProps) => {
  const defaultFormatMessage: string = "File must be in .csv format";
  const wrongFormatMessage: string =
    "Wrong file format. Please try again with a .csv file.";
  const emptyValuesMessage: string =
    "Your sheet is missing data. Please ensure all cells are filled out.";

  //states for managing file importation
  const [importedData, setImportedData] = useState<Player[]>([]);
  const [error, setError] = useState<string>(defaultFormatMessage); //error can either be null or a string and its initial state is null
  const [isError, setIsError] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>("");

  const hiddenFileInput = useRef<HTMLInputElement | null>(null);
  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    setFileName(file.name);

    if (!file) {
      return;
    }

    if (file.name.endsWith(".csv")) {
      setError(defaultFormatMessage);
      setIsError(false);
      return;
    }

    if (!file.name.endsWith(".csv")) {
      setError(wrongFormatMessage);
      setIsError(true);
      return;
    }

   

    if (file) {
      Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        complete: function (result) {
          const parsedData = result.data as Player[];

          const hasEmptyValues = parsedData.some((player) =>
            Object.values(player).some(
              (value) => value === null || value === undefined || value === ""
            )
          );

          if (hasEmptyValues) {
            setError(emptyValuesMessage);
            setIsError(true)
            return;
          }

          setImportedData(parsedData);
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

            <div className={styles.modalImportRosterContainer}>
              <p className={styles.modalRosterText}>Roster File</p>
              <div
                className={`${styles.modalImportButtonContainer} ${
                  isError ? styles.modalImportRosterError : null
                }`}
              >
                <p className={styles.modalFileName}>{fileName}</p>
                <div onClick={handleClick}>
                  <button
                    className={`${styles.modalFileButton} ${
                      isError ? styles.modalImportRosterError : null
                    }`}
                  >
                    Select File
                  </button>
                </div>
              </div>
              <p className={styles.modalErrorText}>{error}</p>
            </div>
            <input
              className={styles.modalInput}
              type="file"
              onChange={handleFile}
              ref={hiddenFileInput}
            />
          </div>
        </div>
      )}
    </>,
    document.getElementById("portal")!
  );
};

export default ImportTeamModal;
