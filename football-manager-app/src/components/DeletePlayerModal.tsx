import ModalHeader from "./ModalHeader";

import styles from "@/styles/Modal.module.css";
import ReactDom from "react-dom";
import SecondaryButton from "./SecondaryButton";
import WarningButton from "./WarningButton";
import { usePlayerContext } from "./PlayerContext";

type DeletePlayerModalProps = {
  open: boolean;
  onClose: () => void;
};
const DeletePlayerModal = ({ open, onClose }: DeletePlayerModalProps) => {
const {setIsDeletePlayerModalIsOpen, deletePlayer, playerToEditOrDelete, setIsEditPlayerModalIsOpen} = usePlayerContext();
  const  handleDelete=()=>{
setIsDeletePlayerModalIsOpen(false)
setIsEditPlayerModalIsOpen(false)
deletePlayer(playerToEditOrDelete)
console.log(playerToEditOrDelete)

    }
  return ReactDom.createPortal(
    <>
      {open && (
        <div className={styles.modalOverlay}>
          <div
            style={{ width: "379px", height: "150px" }}
            className={styles.modalStyles}
          >
            <ModalHeader title={"Are you sure?"} onClose={onClose} />
            <div style={{ display: "flex", justifyContent:"flex-start", alignItems:"center", height:"50px", marginLeft: "5px" }}>
              <div>
                {" "}
                <p className={styles.formationOverviewModaltext}>
                  This action cannot be undone.
                </p>
              </div>
              <div style={{display:"flex",gap:"8px", position:"absolute", top:"69%", right:"5%"}}>
                <SecondaryButton onClick={onClose} text="Cancel" /> <WarningButton onClick={handleDelete} text="Delete" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>,
    document.getElementById("portal")!
  );
};

export default DeletePlayerModal;
