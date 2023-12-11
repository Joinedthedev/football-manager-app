import React from "react";
import styles from "@/styles/Modal.module.css";
import ReactDom from "react-dom";
import ModalHeader from "./ModalHeader";
import ModalLine from "../assets/component-assets/ModalLine";
import { v4 as uuidv4 } from 'uuid';
import Papa from "papaparse";
import { useState, useRef } from "react";

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
   Id: string;
};

const ImportTeamModal = ({ open, onClose }: ImportTeamModalProps) => {
  const noFileMessage: string = "No file Selected";

  const defaultFormatMessage: string = "File must be in .csv format";

  const wrongFormatMessage: string =
    "Wrong file format. Please try again with a .csv file.";

  const emptyValuesMessage: string =
    "Your sheet is missing data. Please ensure all cells are filled out.";

  const [error, setError] = useState<string>(defaultFormatMessage);
  const [isError, setIsError] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>(noFileMessage);

  const { players, setPlayers } = usePlayerContext();
  const { setIsRosterImported } = usePlayerContext();
  const { isFile, setIsFile } = usePlayerContext();
  const hiddenFileInput = useRef<HTMLInputElement | null>(null);
  const handleClick = () => {
    
    hiddenFileInput.current?.click();
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayers([]);
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
    if (file) {
      setPlayers([]);
    }

    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: function (result) {
        console.log(result.errors); 
        const parsedData: Player[] = result.data.map((csvPlayer:any) => ({
          
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
          Id: uuidv4(),
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
    setIsRosterImported(true);
    onClose();
    setIsFile(null)
  };

  const getTotalPlayers = (players: Player[]): number => {
    return players.length;
  };

  const getGoalkeepers = (players: Player[]): Player[] => {
    return players.filter((player) => player.position === "Goalkeeper");
  };

  const getMidfielders = (players: Player[]): Player[] => {
    return players.filter((player) => player.position === "Midfielder");
  };

  const getDefenders = (players: Player[]): Player[] => {
    return players.filter((player) => player.position === "Defender");
  };

  const getFowards = (players: Player[]): Player[] => {
    return players.filter((player) => player.position === "Fowards");
  };


  const totalPlayers = getTotalPlayers(players);
  const totalGoalKeepers = getGoalkeepers(players).length;
  const totalMidfielders = getMidfielders(players).length;
  const totalDefenders = getDefenders(players).length;
  const totalFowards = getFowards(players).length;

  
  return ReactDom.createPortal(
    <>
      {open && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalStyles}>
            <ModalHeader title={"Importer"} onClose={onClose} />
            <ModalLine />

            <div className={styles.modalImportRosterContainer}>
              <p className={styles.modalImportRosterText}>Roster File</p>
              <div
                className={`${styles.modalImportRosterFileButtonContainer} ${
                  isError ? styles.modalImportRosterError : null
                }`}
              >
                <p className={styles.modalImportRosterFileName}>{fileName}</p>
                <div onClick={handleClick}>
                  <button
                    className={`${styles.modalImportRosterFileButton} ${
                      isError ? styles.modalImportRosterError : null
                    }`}
                  >
                    Select File
                  </button>
                </div>
              </div>
              <p className={styles.modalImportRosterErrorText}>{error}</p>
            </div>
            <input
              className={styles.modalInput}
              type="file"
              onChange={handleFile}
              ref={hiddenFileInput}
            />

            {isFile ? (
              <div style={{ marginTop: "20px" }}>
                <p className={styles.modalImportRosterFileSummaryText}>
                  {" "}
                  File Summary
                </p>

                <div className={styles.modalImportRosterFileSummaryContainer}>
                  <div className={styles.modalImportRosterStatColumn}>
                    <p className={styles.modalImportRosterStatTitle}>
                      Total Players
                    </p>
                    <p className={styles.modalImportRosterStatText}>
                      {totalPlayers}
                    </p>
                  </div>
                  <div className={styles.modalImportRosterStatColumn}>
                    <p className={styles.modalImportRosterStatTitle}>
                      Goalkeepers
                    </p>
                    <p className={styles.modalImportRosterStatText}>
                      {totalGoalKeepers}
                    </p>
                  </div>
                  <div className={styles.modalImportRosterStatColumn}>
                    <p className={styles.modalImportRosterStatTitle}>
                      Midfielders
                    </p>
                    <p className={styles.modalImportRosterStatText}>
                      {totalMidfielders}
                    </p>
                  </div>
                  <div className={styles.modalImportRosterStatColumn}>
                    <p className={styles.modalImportRosterStatTitle}>
                      Defenders
                    </p>
                    <p className={styles.modalImportRosterStatText}>
                      {totalDefenders}
                    </p>
                  </div>
                  <div className={styles.modalImportRosterStatColumn}>
                    <p className={styles.modalImportRosterStatTitle}>Fowards</p>
                    <p className={styles.modalImportRosterStatText}>
                      {totalFowards}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              null
            )}

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
