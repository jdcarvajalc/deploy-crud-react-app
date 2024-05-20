import { useState } from "react";
import styles from "./GeneralInputs.module.css";

const GeneralInputs = (props) => {
    //props used for a lot of props from the father

    const [notFocused, setNotFocused] = useState(false); //Hook for display error message (validation) just when input is not focused

    const handleNotFocused = (e) => {
        setNotFocused(true); // Set not focused to true when input is not in focus
    };

    const { label, errorMessage, onChange, id, ...inputProps } = props;
    return (
        <div className={styles.formInput}>
            <label className={styles.labelGeneric}>{label}</label>
            <input
                required
                className={styles.inputGeneric}
                {...inputProps}
                onChange={onChange}
                onBlur={handleNotFocused}
                focused={notFocused.toString()}
            />
            <span className={styles.particularErrorMessage}>
                {errorMessage}
            </span>
        </div>
    );
};

export default GeneralInputs;
