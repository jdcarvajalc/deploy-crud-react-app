import styles from "./GoogleAuth.module.css";
import { useGoogleAuth } from "../../context/GoogleAuthContext";
import GoogleButtonSeparator from "./GoogleButtonSeparator";
import GoogleButton from "react-google-button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GoogleAuth = () => {
    const { googleSignIn, googleUser } = useGoogleAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (googleUser != null) {
            navigate("/");
        }
    }, [googleUser, navigate]); //googleUser and navigate state changing are dependencies of the effect hook

    return (
        <>
            {/* Separator component for Google Signin button*/}
            <GoogleButtonSeparator />

            <div className={styles.googleButtonContainer}>
                <GoogleButton
                    label="Ingresar con Google"
                    style={{
                        marginBottom: "30px",
                        borderRadius: "10px",
                        padding: "5px",
                        background: "var(--main-color)",
                        fontFamily: "Nunito Sans, sans-serif",
                    }}
                    onClick={googleSignIn}
                />
            </div>
        </>
    );
};

export default GoogleAuth;
