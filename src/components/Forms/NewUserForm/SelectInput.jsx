import { useEffect, useState } from "react";
import styles from "./SelectInput.module.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

const SelectInput = (props) => {
    const [roleOptions, setRoleOptions] = useState([]);
    const [idDocumentOptions, setIdDocumentOptions] = useState([]);

    // Hook to fetch roles and idDocumentTypes options for new users
    useEffect(() => {
        const fetchSelectOptions = async () => {
            let rolesList = [];
            let idDocumentsList = [];
            try {
                // fetch roles options
                const rolesQuerySnapshot = await getDocs(
                    collection(db, "roles")
                );
                rolesQuerySnapshot.forEach((doc) => {
                    rolesList.push({ id: doc.id, role: doc.data().role });
                });
                setRoleOptions(rolesList);

                // fetch idDocumentTypes options
                const idDocumentsQuerySnapshot = await getDocs(
                    collection(db, "idDocuments")
                );
                idDocumentsQuerySnapshot.forEach((doc) => {
                    idDocumentsList.push({
                        id: doc.id,
                        idDocumentType: doc.data().idDocumentType,
                    });
                });
                setIdDocumentOptions(idDocumentsList);
            } catch (error) {
                console.log(error);
            }
        };
        fetchSelectOptions();
    }, []);

    const { label, onChange, options, name, value } = props; //Destructuring

    return (
        <div className={styles.selectContainer}>
            <label className={styles.labelGeneric}>{label}</label>
            <select
                className={styles.select}
                required
                onChange={onChange}
                name={name}
                value={value}
            >
                {/* Default option */}
                <option hidden value="">
                    Seleccione una opción
                </option>

                {/* Conditional rendering */}
                {name === "idDocumentType" ? (
                    <>
                        {/* Load fetch data */}
                        {idDocumentOptions.map((idDocumentOption) => (
                            <option
                                key={idDocumentOption.id}
                                value={idDocumentOption.idDocumentType}
                            >
                                {idDocumentOption.idDocumentType}
                            </option>
                        ))}
                    </>
                ) : name === "role" ? (
                    <>
                        {/* Load fetch data */}
                        {roleOptions.map((roleOption) => (
                            <option key={roleOption.id} value={roleOption.role}>
                                {roleOption.role}
                            </option>
                        ))}
                    </>
                ) : (
                    options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))
                )}
            </select>
        </div>
    );
};

export default SelectInput;
