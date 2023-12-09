
import ModalHeader from "./ModalHeader";

import styles from "@/styles/Modal.module.css";
import ReactDom from "react-dom";
import PenIcon from "../assets/component-assets/PenIcon";
import TrashIcon from "../assets/component-assets/TrashIcon";
import DeletePlayerModal from "./DeletePlayerModal";
import { usePlayerContext } from "./PlayerContext";

type EditPlayerModalProps = {
  open: boolean;
  
  onClose: ()=> void;
};





const EditPlayerModal = ({ open, onClose }: EditPlayerModalProps) => {
  const {isDeletePlayerModalIsOpen, setIsDeletePlayerModalIsOpen} = usePlayerContext();
  const handleDeleteClick =()=>{
  setIsDeletePlayerModalIsOpen(true);
}
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
                alignItems: "self-start"
              }}
            >
              <div className={styles.editPlayerModalContainer}>
                <span  style={{ marginRight: "5px", cursor:"pointer"}}>
                  <PenIcon />
                </span>{" "}
                <p>Edit Player</p>
              </div>
              <div className={styles.editPlayerModalContainer}>
                <span  onClick={handleDeleteClick} style={{  cursor:"pointer", marginRight: "10px" }}>
                  <TrashIcon />
                </span>
                <p>Delete Player</p>
              </div>
            </div>
          </div>
          

        </div>
        
      )}
      <DeletePlayerModal open={isDeletePlayerModalIsOpen} onClose={()=>setIsDeletePlayerModalIsOpen(false)}/>
    </>,
    document.getElementById("portal")!
  );
};

export default EditPlayerModal;
