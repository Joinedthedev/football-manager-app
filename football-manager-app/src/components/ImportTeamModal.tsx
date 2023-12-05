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
  image: string;
  jerseyNumber: number;
  position: string;
  height: number;
  weight: number;
  nationality: string;
  flagImage: string;
  starter: string;
  appearances: number;
  minutesPlayed: number;
  goals: number;
  assists: number;
  cleanSheets: number;
  saves: number;
};

const ImportTeamModal = ({ open, onClose }: ImportTeamModalProps) => {
  const noFileMessage: string = "No file Selected";

  const defaultFormatMessage: string = "File must be in .csv format";

  const wrongFormatMessage: string =
    "Wrong file format. Please try again with a .csv file.";

  const emptyValuesMessage: string =
    "Your sheet is missing data. Please ensure all cells are filled out.";

  //states for managing file importation
  const [importedData, setImportedData] = useState<Player[]>([]);
  const [error, setError] = useState<string>(defaultFormatMessage); //error can either be null or a string and its initial state is null
  const [isError, setIsError] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>(noFileMessage);
  const [isFile, setIsFile] = useState<File | null>(null);

  const hiddenFileInput = useRef<HTMLInputElement | null>(null);
  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    setFileName(file?.name || noFileMessage);

    if (!file) {
      return;
    }

    if (!file.name.endsWith(".csv")) {
      setError(wrongFormatMessage);
      setIsError(true);
      setIsFile(null)
      return;
    }

    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: function (result) {
        console.log(result.errors); // Log parsing errors
        const parsedData = result.data as Player[];

        const hasEmptyValues = parsedData.some((player) =>
          Object.values(player).some(
            (value) => value === null || value === undefined || value === ""
          )
        );

        if (hasEmptyValues) {
          setError(emptyValuesMessage);
          setIsError(true);
          setImportedData([]);
          return;
        }

        setError(defaultFormatMessage);
        setIsError(false);
        setIsFile(file)
        setImportedData(parsedData);
      },
    });
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
                className={`${styles.modalFileButtonContainer} ${
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

            <div className={styles.modalImportRosterButtonContainer}>
              {isFile && !isError ? <button className={styles.modalImportRosterButtonActive}>Import</button>:
              <button onClick={} className={styles.modalImportRosterButtonInactive}>Import</button>}
            </div>
          </div>
        </div>
      )}
    </>,
    document.getElementById("portal")!
  );
};

export default ImportTeamModal;
