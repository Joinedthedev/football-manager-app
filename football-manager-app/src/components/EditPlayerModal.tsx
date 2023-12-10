import ModalHeader from "./ModalHeader";

import styles from "@/styles/Modal.module.css";
import ReactDom from "react-dom";
import PenIcon from "../assets/component-assets/PenIcon";
import TrashIcon from "../assets/component-assets/TrashIcon";
import DeletePlayerModal from "./DeletePlayerModal";
import { usePlayerContext } from "./PlayerContext";
import EditPlayerDetailsModal from "./EditPlayerDetailsModal";

type EditPlayerModalProps = {
  open: boolean;

  onClose: () => void;
};

const EditPlayerModal = ({ open, onClose }: EditPlayerModalProps) => {
  const {
    isDeletePlayerModalIsOpen,
    setIsDeletePlayerModalIsOpen,
    isEditPlayerDetailsModalOpen,
    setIsEditPlayerDetailsModalOpen,
  } = usePlayerContext();
  const handleDeleteClick = () => {
    setIsDeletePlayerModalIsOpen(true);
  };

  const handleEditClick = () => {
    setIsEditPlayerDetailsModalOpen(true);
  };
  return ReactDom.createPortal(
    <>
      {open && (
        <div className={styles.modalOverlay}>
          <div
            style={{ width: "233px", height: "140px" }}
            className={styles.modalStyles}
          >
            <ModalHeader title={"Actions"} onClose={onClose} />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "self-start",
              }}
            >
              <div className={styles.editPlayerModalContainer}>
                <span
                  onClick={handleEditClick}
                  style={{ marginRight: "5px", cursor: "pointer" }}
                >
                  <PenIcon />
                </span>{" "}
                <p>Edit Player</p>
              </div>
              <div className={styles.editPlayerModalContainer}>
                <span
                  onClick={handleDeleteClick}
                  style={{ cursor: "pointer", marginRight: "10px" }}
                >
                  <TrashIcon />
                </span>
                <p>Delete Player</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <DeletePlayerModal
        open={isDeletePlayerModalIsOpen}
        onClose={() => setIsDeletePlayerModalIsOpen(false)}
      />
      <EditPlayerDetailsModal
        open={isEditPlayerDetailsModalOpen}
        onClose={() => setIsEditPlayerDetailsModalOpen(false)}
      />
    </>,
    document.getElementById("portal")!
  );
};

export default EditPlayerModal;
