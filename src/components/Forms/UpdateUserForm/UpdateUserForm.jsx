import styles from "./UpdateUserForm.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, storage } from "../../../firebase";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Swal from "sweetalert2";
import {
    inputs,
    idDocumentInput,
    selectsData,
} from "../../../utils/updateInputsData"; // Arrays with the props for each input element
import GeneralInputs from "../NewUserForm/GeneralInputs";
import ImageInput from "../NewUserForm/ImageInput";
import SelectInput from "../NewUserForm/SelectInput";
import ImageViewForUpdating from "./ImageViewForUpdating";

const UpdateUserForm = ({ formTitle, setOpen, elementToUpdate }) => {
    // useState hook for onChange event in the input elements
    const [values, setValues] = useState({ ...elementToUpdate });
    const [file, setFile] = useState("");
    const [fileUploadProcessPercentage, setFileUploadProcessPercentage] =
        useState(null);

    const navigate = useNavigate();

    // useEffect for getting the file URL when a new file is uploaded
    useEffect(() => {
        const uploadFile = () => {
            const name = new Date().getTime() + file.name; //if is a file with the same name of a previous one it will be renamed with date
            const storageRef = ref(storage, name);

            const uploadTask = uploadBytesResumable(storageRef, file); // upload the file to storage in Firebase

            // storage Firebase progress listener
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setFileUploadProcessPercentage(progress);
                    switch (snapshot.state) {
                        case "paused":
                            console.log("Upload is paused");
                            break;
                        default:
                            break;
                    }
                },
                (error) => {
                    console.log(error);
                },
                // if everything is ok, is going to give an image URL for storage it with the other input values
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        (downloadURL) => {
                            setValues((prev) => ({
                                ...prev,
                                image: downloadURL,
                            }));
                        }
                    );
                }
            );
        };
        file && uploadFile(); // if we have a file, then call the function to start uploading it
    }, [file]);

    const handleImageChange = (selectedFile) => {
        setFile(selectedFile);
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
                title: "Actualizando usuario",
                didOpen: () => {
                    Swal.showLoading();
                },
            });
            // Get actual user´s doc
            const userDocRef = doc(db, "users", elementToUpdate.id);
            // Update Firestore values
            await updateDoc(userDocRef, {
                ...values,
                timeStamp: serverTimestamp(),
            });
            Swal.fire({
                icon: "success",
                title: "Usuario actualizado",
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
            <div className={styles.inputsContainer}>
                {/* Map through the array of objects to create an Input component for each item */}
                {inputs.map((item) => (
                    <GeneralInputs
                        key={item.id}
                        {...item}
                        value={values[item.name]}
                        onChange={onChange}
                    />
                ))}
                {/* Pass handleSelectChange callback as a prop */}
                <SelectInput
                    label={"Tipo de documento de identidad"}
                    onChange={onChange}
                    options={selectsData[1].options} // Options for this select are in /utils/registerInputsData.js
                    name={selectsData[1].name}
                    value={values[selectsData[1].name]}
                />
                <GeneralInputs
                    {...idDocumentInput}
                    value={values.idDocument}
                    onChange={onChange}
                />
                <SelectInput
                    label={"Identidad de género"}
                    onChange={onChange}
                    options={selectsData[0].options} // Options for this select are in /utils/registerInputsData.js
                    name={selectsData[0].name}
                    value={values[selectsData[0].name]}
                />
                <SelectInput
                    label={"Rol en la organización"}
                    onChange={onChange}
                    options={selectsData[2].options} // Options for this select are in /utils/registerInputsData.js
                    name={selectsData[2].name}
                    value={values[selectsData[2].name]}
                />
                {/* Pass handleImageChange callback as a prop */}
                <ImageInput onImageChange={handleImageChange} />
                <ImageViewForUpdating file={file} currentFile={values.image} />
            </div>
            <div className={styles.buttonContainer}>
                <button
                    disabled={
                        fileUploadProcessPercentage !== null &&
                        fileUploadProcessPercentage < 100
                    }
                    type="submit"
                    className={styles.submitButton}
                >
                    Enviar
                </button>
            </div>
        </form>
    );
};

export default UpdateUserForm;
