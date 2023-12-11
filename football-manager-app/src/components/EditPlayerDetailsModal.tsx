import ModalHeader from "./ModalHeader";

import styles from "@/styles/Modal.module.css";
import ReactDom from "react-dom";
import { useState, useEffect } from "react";
import { usePlayerContext } from "./PlayerContext";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

type EditPlayerDetailsModalProps = {
  open: boolean;

  onClose: () => void;
};

const EditPlayerDetailsModal = ({
  open,
  onClose,
}: EditPlayerDetailsModalProps) => {
  const { editPlayer, players } = usePlayerContext();
  const { playerToEditOrDelete,  setIsEditPlayerModalIsOpen } = usePlayerContext();

  const [hasChanges, setHasChanges] = useState<boolean>(false);

  const nationalities: string[] = [
    "Costa Rican",
    "Morocco",
    "French",
    "Spanish",
    "Brazilian",
    "Italian",
    "Argentinian",
    "Guinea-Bissau",
    "Dutch",
    "German",
    "Portuguese",
    "Senegal",
  ];

  const positions: string[] = [
    "Defender",
    "Forward",
    "Goalkeeper",
    "Midfielder",
  ];

  const getFlagImage = (nationality: string): string => {
    switch (nationality.toLowerCase()) {
      case "argentinian":
        return "https://cdn-icons-png.flaticon.com/512/197/197573.png";
      case "brazilian":
        return "https://cdn-icons-png.flaticon.com/512/197/197386.png";

      case "italian":
        return "https://cdn-icons-png.flaticon.com/512/197/197626.png";

      case "french":
        return "https://cdn-icons-png.flaticon.com/512/197/197560.png";

      case "spanish":
        return "https://cdn-icons-png.flaticon.com/512/197/197593.png";

      case "guinea-bissau":
        return "https://cdn-icons-png.flaticon.com/512/197/197483.png";

      case "dutch":
        return "https://cdn-icons-png.flaticon.com/512/197/197441.png";

      case "morocco":
        return "https://cdn-icons-png.flaticon.com/512/197/197551.png";

      case "costa rican":
        return "https://cdn-icons-png.flaticon.com/512/197/197506.png";

      case "german":
        return "https://cdn-icons-png.flaticon.com/512/197/197571.png";

      case "portuguese":
        return "https://cdn-icons-png.flaticon.com/512/197/197463.png";

      case "senegal":
        return "https://cdn-icons-png.flaticon.com/512/197/197377.png";

      default:
        return "";
    }
  };
  const playerToEdit = players.find(
    (player) => player.Id === playerToEditOrDelete
  );

  const [updatedPlayer, setUpdatedPlayer] = useState({
    name: playerToEdit?.name || "",
    image: playerToEdit?.image || "",
    jerseyNumber: playerToEdit?.jerseyNumber || 0,
    position: playerToEdit?.position || "",
    height: playerToEdit?.height || 0,
    weight: playerToEdit?.weight || 0,
    nationality: playerToEdit?.nationality || "",
    flagImage: playerToEdit?.flagImage || "",
    starter: playerToEdit?.starter || "",
    appearances: playerToEdit?.appearances || 0,
    minutesPlayed: playerToEdit?.minutesPlayed || 0,
    goals: playerToEdit?.goals || 0,
    assists: playerToEdit?.assists || 0,
    cleanSheets: playerToEdit?.cleanSheets || 0,
    saves: playerToEdit?.saves || 0,
    Id: playerToEdit?.Id || "",
  });
  useEffect(() => {
    // Set initial values when the component mounts
    setUpdatedPlayer({
      name: playerToEdit?.name || '',
      image: playerToEdit?.image || '',
      jerseyNumber: playerToEdit?.jerseyNumber || 0,
      position: playerToEdit?.position || '',
      height: playerToEdit?.height || 0,
      weight: playerToEdit?.weight || 0,
      nationality: playerToEdit?.nationality || '',
      flagImage: playerToEdit?.flagImage || '',
      starter: playerToEdit?.starter || '',
      appearances: playerToEdit?.appearances || 0,
      minutesPlayed: playerToEdit?.minutesPlayed || 0,
      goals: playerToEdit?.goals || 0,
      assists: playerToEdit?.assists || 0,
      cleanSheets: playerToEdit?.cleanSheets || 0,
      saves: playerToEdit?.saves || 0,
      Id: playerToEdit?.Id || '',
    });
  }, [playerToEdit]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUpdatedPlayer((prev) => ({ ...prev, [name]: value }));

    setHasChanges(true)
  };

  const logNothing = ()=>{
    console.log("nothing")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
    setIsEditPlayerModalIsOpen(false)


    const updatedFlagImage = getFlagImage(updatedPlayer.nationality);

    const updatedPlayerWithUnchangedProperties = {
      ...playerToEdit,
      name: updatedPlayer.name,
      image: updatedPlayer.image,
      jerseyNumber: updatedPlayer.jerseyNumber,
      position: updatedPlayer.position,
      height: updatedPlayer.height,
      weight: updatedPlayer.weight,
      nationality: updatedPlayer.nationality,
      flagImage: updatedFlagImage,
      starter: updatedPlayer.starter,

      appearances: playerToEdit?.appearances || 0,
      minutesPlayed: playerToEdit?.minutesPlayed || 0,
      goals: playerToEdit?.goals || 0,
      assists: playerToEdit?.assists || 0,
      cleanSheets: playerToEdit?.cleanSheets || 0,
      saves: playerToEdit?.saves || 0,
      Id: playerToEdit?.Id || "",
    };
    editPlayer(playerToEditOrDelete, updatedPlayerWithUnchangedProperties);
    setHasChanges(false)
  };

  return ReactDom.createPortal(
    <>
      {open && (
        <div className={styles.modalOverlay}>
          <div
            className={styles.modalStyles}
            style={{ width: "480px", padding: "24px" }}
          >
            <ModalHeader title={"Edit Player"} onClose={onClose} />
            <form onSubmit={handleSubmit}>
              <div className={styles.editPlayer}>
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    justifyContent: "spaceBetween",
                  }}
                >
                  <label>
                    <p style={{ margin: "8px" }}>Name</p>
                    <input
                      type="text"
                      name="name"
                      value={updatedPlayer?.name}
                      onChange={handleChange}
                      style={{ width: "274px" }}
                    />
                  </label>
                  <label>
                    <p style={{ margin: "8px" }}>Jersey Number</p>
                    <input
                      type="number"
                      name="jerseyNumber"
                      value={updatedPlayer?.jerseyNumber}
                      onChange={handleChange}
                    />
                  </label>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    justifyContent: "spaceBetween",
                  }}
                >
                  <label>
                    <p style={{ margin: "8px" }}>Height</p>
                    <input
                      style={{ width: "208px" }}
                      type="number"
                      name="height"
                      value={updatedPlayer?.height}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    <p style={{ margin: "8px" }}>Weight</p>
                    <input
                      style={{ width: "208px" }}
                      type="number"
                      name="weight"
                      value={updatedPlayer?.weight}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label>
                    <p style={{ margin: "8px" }}>Position</p>
                    <select
                      style={{ width: "100%" }}
                      name="position"
                      value={updatedPlayer?.position}
                      onChange={handleChange}
                    >
                      {positions.map((position) => (
                        <option>{position}</option>
                      ))}
                    </select>
                  </label>
                  <label>
                    <p style={{ margin: "8px" }}>Nationality</p>
                    <select
                      style={{ width: "100%" }}
                      name="nationality"
                      value={updatedPlayer.nationality}
                      onChange={handleChange}
                    >
                      {nationalities.map((nationality) => (
                        <option>{nationality}</option>
                      ))}
                    </select>
                  </label>

                  <label>
                    <p style={{ marginTop: "12px" }}>Starter</p>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <label htmlFor="Yes"> Yes</label>
                        <input
                          type="radio"
                          id="Yes"
                          name="starter"
                          value={"Yes"}
                          checked={updatedPlayer.starter==="Yes"}
                          onChange={handleChange}
                        />
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <label htmlFor="No"> No</label>
                        <input
                          type="radio"
                          id="No"
                          name="starter"
                          value={"No"}
                          checked={updatedPlayer.starter==="No"}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </label>
                </div>
                <span style={{ display: "flex", alignSelf: "flex-end" }}>
                  {hasChanges ? <PrimaryButton onClick={()=>handleSubmit} text="Edit Player" /> :  <button disabled className={styles.modalImportRosterButtonInactive}>
                  Edit Player
                </button>}
                </span>
              </div>
            </form>
          </div>
        </div>
      )}
    </>,

    document.getElementById("portal")!
  );
};

export default EditPlayerDetailsModal;
