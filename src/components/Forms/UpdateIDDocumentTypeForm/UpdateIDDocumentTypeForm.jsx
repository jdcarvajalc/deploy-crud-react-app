import styles from "./UpdateIDDocumentTypeForm.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../../firebase";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import Swal from "sweetalert2";

const UpdateIDDocumentTypeForm = ({ formTitle, setOpen, elementToUpdate }) => {
    // useState hook for onChange event in the input elements
    const [values, setValues] = useState({ ...elementToUpdate });

    //Hook for display error message (validation) just when input is not focused
    const [notFocused, setNotFocused] = useState(false);

    const navigate = useNavigate();

    const onChange = (e) => {
        /*
         *   Spread the values, that means take all the current values
         *   and add/change only the one we are handling in this onChange function
         */
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleNotFocused = (e) => {
        setNotFocused(true); // Set not focused to true when input is not in focus
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); //prevent page refresh when submitting the form
        setOpen(false); //close modal after submiting the form
        try {
            Swal.fire({
                title: "Actualizando tipo de documento",
                didOpen: () => {
                    Swal.showLoading();
                },
            });
            // Get actual user´s doc
            const userDocRef = doc(db, "idDocuments", elementToUpdate.id);
            // Update Firestore values
            await updateDoc(userDocRef, {
                ...values,
                timeStamp: serverTimestamp(),
            });
            Swal.fire({
                icon: "success",
                title: "Tipo de documento actualizado",
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
                <label>Tipo de documento</label>
                <input
                    required
                    name="idDocumentType"
                    value={values.idDocumentType}
                    type="text"
                    pattern="^[A-Z.]+$"
                    placeholder="Escriba el código del tipo de documento, por ejemplo, C.C."
                    className={styles.inputGeneric}
                    onChange={onChange}
                    onBlur={handleNotFocused}
                    focused={notFocused.toString()}
                />
                <span className={styles.particularErrorMessage}>
                    ¡Por favor, no debe estar vacío y/o no debe contener
                    caracteres especiales diferentes al punto, las letras deben
                    ser mayúsculas y tampoco debe contener números!
                </span>

                <label className={styles.labelGeneric}>
                    Descripción del tipo de documento
                </label>
                <input
                    required
                    name="description"
                    value={values.description}
                    type="text"
                    pattern="^[A-Za-záéíóúÀÁÉÍÓÚñü s]+$"
                    placeholder="Escriba la descripción del código del tipo de documento, por ejemplo, Cédula de ciudadanía"
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

export default UpdateIDDocumentTypeForm;
