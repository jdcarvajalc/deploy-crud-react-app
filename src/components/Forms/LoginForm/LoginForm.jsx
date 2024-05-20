import styles from "./LoginForm.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleAuth from "../../GoogleAuth/GoogleAuth";
import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import GeneralInputs from "../NewUserForm/GeneralInputs";
import { emailInput, passwordInput } from "../../../utils/loginInputsData";
import Swal from "sweetalert2";

const LoginForm = ({ formTitle }) => {
    // useState hook for onChange event in the input elements
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const onChange = (e) => {
        /*
         *   Spread the values, that means take all the current values
         *   and add/change only the one we are handling in this onChange function
         */
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleLoginWithEmailAndPassword = async (e) => {
        e.preventDefault();
        try {
            Swal.fire({
                title: "Iniciando sesión con correo y contraseña",
                didOpen: () => {
                    Swal.showLoading();
                },
            });

            // Fetch users data
            const userSnapshot = await getDocs(collection(db, "users"));
            userSnapshot.forEach((doc) => {
                const userData = doc.data();
                if (
                    // Validate user email and password
                    userData.email === values.email &&
                    userData.password === values.password
                ) {
                    navigate("/vhome");
                } else {
                    console.log("Intenta de nuevo");
                }
            });
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }
    };

    return (
        <form
            className={styles.form}
            onSubmit={handleLoginWithEmailAndPassword}
        >
            <h2 className={styles.formTitle}>{formTitle}</h2>
            <div className={styles.inputsContainer}>
                <GeneralInputs
                    {...emailInput}
                    value={values.email}
                    onChange={onChange}
                />
                <GeneralInputs
                    {...passwordInput}
                    value={values.password}
                    onChange={onChange}
                />
            </div>
            <div className={styles.buttonContainer}>
                <button type="submit" className={styles.submitButton}>
                    Enviar
                </button>
            </div>

            <GoogleAuth />
        </form>
    );
};

export default LoginForm;
