import styles from "./RolesManagement.module.css";
import HeaderForGoogleUsers from "../../components/Header/HeaderForGoogleUsers";
import CreateActionButtonAndModal from "../../components/ActionButtons/CreateActionButtonAndModal";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import Table from "../../components/Tables/Table";
import { rolesColumns } from "../../utils/tableBasicColumns";
import NewRoleForm from "../../components/Forms/NewRoleForm/NewRoleForm";
import UpdateRoleForm from "../../components/Forms/UpdateRoleForm/UpdateRoleForm";

const RolesManagement = () => {
    return (
        <>
            <HeaderForGoogleUsers />
            <div className={styles.rolesManagementContainer}>
                <div className={styles.rolesTableContainer}>
                    <div className={styles.rolesTitleAndButtonContainer}>
                        <h2>Gestionar roles</h2>
                        <CreateActionButtonAndModal
                            IconForButton={<AdminPanelSettingsIcon />}
                            textForButton={"Nuevo rol"}
                            formTitle={"Crear nuevo rol"}
                            ModalContent={NewRoleForm}
                        />
                    </div>
                    <Table
                        tableBasicColumns={rolesColumns}
                        tableType={"roles"}
                        UpdateForm={UpdateRoleForm}
                        updateFormTitle={"Editar rol"}
                    />
                </div>
            </div>
        </>
    );
};

export default RolesManagement;
