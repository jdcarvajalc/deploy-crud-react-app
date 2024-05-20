import styles from "./CreateActionButtonAndModal.module.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { modalStyle } from "../../utils/modalStyles";

export default function CreateActionButtonAndModal({
    formTitle,
    ModalContent,
    IconForButton,
    textForButton,
}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <button className={styles.newUserButton} onClick={handleOpen}>
                {IconForButton}
                <p className={styles.buttonText}>{textForButton}</p>
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    {<ModalContent formTitle={formTitle} setOpen={setOpen} />}
                </Box>
            </Modal>
        </>
    );
}
