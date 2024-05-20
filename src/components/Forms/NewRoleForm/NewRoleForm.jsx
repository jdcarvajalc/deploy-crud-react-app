import styles from "./NewRoleForm.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../../firebase";
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { useGoogleAuth } from "../../../context/GoogleAuthContext";

const NewRoleForm = ({ formTitle, setOpen }) => {
    const { googleUser } = useGoogleAuth();

    // useState hook for onChange event in the input elements
    const [values, setValues] = useState({ role: "" });

    //Hook for display error message (validation) just when input is not focused
    const [notFocused, setNotFocused] = useState(false);

    const navigate = useNavigate();

    const handleNotFocused = (e) => {
        setNotFocused(true); // Set not focused to true when input is not in focus
    };

    const onChange = (e) => {
        /*
         *   Spread the values, that means take all the current values
         *   and add/change only the one we are handling in this onChange function
         */
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); //prevent page refresh when submitting the form
        setOpen(false); //close modal after submiting the form
        try {
            Swal.fire({
                title: "Registrando rol",
                didOpen: () => {
                    Swal.showLoading();
                },
            });
            // upload values to Firestore
            await setDoc(doc(collection(db, "roles")), {
                ...values,
                createdBy: googleUser.displayName,
                timeStamp: serverTimestamp(),
            });
            Swal.fire({
                icon: "success",
                title: "Nuevo rol registrado",
                showConfirmButton: false,
                timer: 1500,
            }).then(() => {
                navigate(0);
            });
        } catch (error) {
            // show an error message if something went wrong
            Swal.fire({
                icon: "error",
                title: "Error",
                text: error.message,
                showConfirmButton: true,
            }).then(() => {
                navigate(0);
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className={styles.formTitle}>{formTitle}</h2>
            <div className={styles.formInput}>
                <label className={styles.labelGeneric}>Rol</label>
                <input
                    required
                    name="role"
                    type="text"
                    pattern="^[A-Za-záéíóúÀÁÉÍÓÚñü s]+$"
                    placeholder="Escriba el nombre del rol"
                    className={styles.inputGeneric}
                    onChange={onChange}
                    onBlur={handleNotFocused}
                    focused={notFocused.toString()}
                />
                <span className={styles.particularErrorMessage}>
                    ¡Por favor, no debe estar vacío y/o no debe contener
                    caracteres especiales y números!
                </span>
            </div>
            <div className={styles.buttonContainer}>
                <button type="submit" className={styles.submitButton}>
                    Enviar
                </button>
            </div>
        </form>
    );
};

export default NewRoleForm;
