import { buttonStyles } from "../../utils/actionButtonStyles";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { modalStyle, readModalStyle } from "../../utils/modalStyles";

// Recieves  props from parent component, for reusability
const ActionButton = (props) => {
    // destructuring the props object
    const {
        buttonType,
        IconComponent,
        ModalContent,
        handleClick,
        selectedElement,
        updateFormTitle,
    } = props;

    const appliedStyles = buttonStyles[buttonType];
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    {
        /* Conditional rendering for the delete action button,
                if it exists we don´t have to popup a modal, just have to delete the item  
            */
    }
    switch (buttonType) {
        case "read":
            return (
                <>
                    <button onClick={handleOpen} style={appliedStyles}>
                        {IconComponent}
                    </button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={readModalStyle}>
                            {<ModalContent elementToRead={selectedElement} />}
                        </Box>
                    </Modal>
                </>
            );
        case "update":
            return (
                <>
                    <button onClick={handleOpen} style={appliedStyles}>
                        {IconComponent}
                    </button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={modalStyle}>
                            {
                                <ModalContent
                                    setOpen={setOpen}
                                    elementToUpdate={selectedElement}
                                    formTitle={updateFormTitle}
                                />
                            }
                        </Box>
                    </Modal>
                </>
            );

        case "delete":
            return (
                <button onClick={handleClick} style={appliedStyles}>
                    {IconComponent}
                </button>
            );
        default:
            break;
    }
};
export default ActionButton;
