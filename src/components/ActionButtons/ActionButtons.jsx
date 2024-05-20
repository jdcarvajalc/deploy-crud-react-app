import ActionButton from "./ActionButton";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";

const ActionButtons = (props) => {
    const {
        type,
        selectedElement,
        ViewCard,
        UpdateForm,
        updateFormTitle,
        handleDelete,
    } = props;

    switch (type) {
        case "users":
            return (
                <>
                    <ActionButton
                        buttonType={"read"}
                        selectedElement={selectedElement}
                        IconComponent={<RemoveRedEyeIcon />}
                        ModalContent={ViewCard} //Replace with the name of the specific action component (card...)
                    />
                    <ActionButton
                        buttonType={"update"}
                        updateFormTitle={updateFormTitle}
                        selectedElement={selectedElement}
                        IconComponent={<ModeEditIcon />}
                        ModalContent={UpdateForm} //Replace with the name of the specific action component (form...)
                    />
                    <ActionButton
                        buttonType={"delete"}
                        IconComponent={<DeleteIcon />}
                        handleClick={handleDelete}
                    />
                </>
            );
        default:
            return (
                <>
                    <ActionButton
                        buttonType={"update"}
                        updateFormTitle={updateFormTitle}
                        selectedElement={selectedElement}
                        IconComponent={<ModeEditIcon />}
                        ModalContent={UpdateForm} //Replace with the name of the specific action component (form...)
                    />
                    <ActionButton
                        buttonType={"delete"}
                        IconComponent={<DeleteIcon />}
                        handleClick={handleDelete}
                    />
                </>
            );
    }
};

export default ActionButtons;
