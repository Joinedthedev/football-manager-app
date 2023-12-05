import React from "react";
import styles from "@/styles/Modal.module.css";
import ReactDom from "react-dom";
import ModalHeader from "./ModalHeader";
import ModalLine from "../assets/component-assets/ModalLine";
import Papa from "papaparse";
import { useState, useRef, useEffect } from "react";
import Button from "./SecondaryButton";
import SecondaryButton from "./SecondaryButton";
import { usePlayerContext } from "./PlayerContext";

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

  const [error, setError] = useState<string>(defaultFormatMessage); //error can either be null or a string and its initial state is null
  const [isError, setIsError] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>(noFileMessage);
  const [isFile, setIsFile] = useState<File | null>(null);

  const { players, setPlayers } = usePlayerContext();

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
      setIsFile(null);
      return;
    }

    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: function (result) {
        console.log(result.errors); // Log parsing errors
        const parsedData: Player[] = result.data.map((csvPlayer) => ({
          name: csvPlayer["Player Name"],
          image: csvPlayer["Player Image"],
          jerseyNumber: parseInt(csvPlayer["Jersey Number"], 10),
          position: csvPlayer["Position"],
          height: csvPlayer["Height"],
          weight: csvPlayer["Weight"],
          nationality: csvPlayer["Nationality"],
          flagImage: csvPlayer["Flag Image"],
          starter: csvPlayer["Starter"],
          appearances: parseInt(csvPlayer["Appearances"], 10),
          minutesPlayed: parseInt(csvPlayer["Minutes Played"], 10),
          goals: parseInt(csvPlayer["Goals"], 10),
          assists: parseInt(csvPlayer["Assists"], 10),
          cleanSheets: parseInt(csvPlayer["Clean Sheets"], 10),
          saves: parseInt(csvPlayer["Saves"], 10),
        }));

        const hasEmptyValues = parsedData.some((player) =>
          Object.values(player).some(
            (value) => value === null || value === undefined || value === ""
          )
        );

        if (hasEmptyValues) {
          setError(emptyValuesMessage);
          setIsError(true);
          return;
        }

        setError(defaultFormatMessage);
        setIsError(false);
        setIsFile(file);
        setPlayers(parsedData);
      },
    });
  };

  const handleImport = () => {
    const playerNames = players.map((player) => player.name);
    console.log("Player Names:", playerNames);
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
              {isFile && !isError ? (
                <button
                  onClick={handleImport}
                  className={styles.modalImportRosterButtonActive}
                >
                  Import
                </button>
              ) : (
                <button className={styles.modalImportRosterButtonInactive}>
                  Import
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>,
    document.getElementById("portal")!
  );
};

export default ImportTeamModal;
