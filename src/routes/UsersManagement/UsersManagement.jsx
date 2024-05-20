import styles from "./UsersManagement.module.css";
import HeaderForGoogleUsers from "../../components/Header/HeaderForGoogleUsers";
import NewUserForm from "../../components/Forms/NewUserForm/NewUserForm";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
import CreateActionButtonAndModal from "../../components/ActionButtons/CreateActionButtonAndModal";
import Table from "../../components/Tables/Table";
import { usersColumns } from "../../utils/tableBasicColumns";
import UpdateUserForm from "../../components/Forms/UpdateUserForm/UpdateUserForm";
import UsersInfoCard from "../../components/InfoCards/UsersInfoCard/UsersInfoCard";

const UsersManagement = () => {
    return (
        <>
            <HeaderForGoogleUsers />
            <div className={styles.usersManagementContainer}>
                <div className={styles.usersTableContainer}>
                    <div className={styles.usersTitleAndButtonContainer}>
                        <h2>Gestionar usuarios</h2>
                        <CreateActionButtonAndModal
                            IconForButton={<PersonAddRoundedIcon />}
                            textForButton={"Nuevo usuario"}
                            formTitle={"Crear nuevo usuario"}
                            ModalContent={NewUserForm}
                        />
                    </div>
                    <Table
                        tableBasicColumns={usersColumns}
                        tableType={"users"}
                        ViewCard={UsersInfoCard}
                        UpdateForm={UpdateUserForm}
                        updateFormTitle={"Editar usuario"}
                    />
                </div>
            </div>
        </>
    );
};
export default UsersManagement;
