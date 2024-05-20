import styles from "./IDTypesManagement.module.css";
import HeaderForGoogleUsers from "../../components/Header/HeaderForGoogleUsers";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import CreateActionButtonAndModal from "../../components/ActionButtons/CreateActionButtonAndModal";
import Table from "../../components/Tables/Table";
import { idDocumentTypesColumns } from "../../utils/tableBasicColumns";
import NewIDDocumentTypeForm from "../../components/Forms/NewIDDocumentTypeForm/NewIDDocumentTypeForm";
import UpdateIDDocumentTypeForm from "../../components/Forms/UpdateIDDocumentTypeForm/UpdateIDDocumentTypeForm";

const DocumentTypesManagement = () => {
    return (
        <>
            <HeaderForGoogleUsers />
            <div className={styles.idTypesManagementContainer}>
                <div className={styles.idTypesTableContainer}>
                    <div className={styles.idTypesTitleAndButtonContainer}>
                        <h2>Gestionar tipos de documento</h2>
                        <CreateActionButtonAndModal
                            IconForButton={<ContactPageIcon />}
                            textForButton={"Nuevo tipo de documento"}
                            formTitle={"Crear nuevo tipo de documento"}
                            ModalContent={NewIDDocumentTypeForm}
                        />
                    </div>
                    <Table
                        tableBasicColumns={idDocumentTypesColumns}
                        tableType={"idDocuments"}
                        UpdateForm={UpdateIDDocumentTypeForm}
                        updateFormTitle={"Editar tipo de documento"}
                    />
                </div>
            </div>
        </>
    );
};

export default DocumentTypesManagement;
