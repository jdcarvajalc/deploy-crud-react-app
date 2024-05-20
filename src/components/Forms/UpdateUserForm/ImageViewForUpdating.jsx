import React from "react";
import styles from "../NewUserForm/ImageView.module.css";

const ImageViewForUpdating = ({ file, currentFile }) => {
    const imageUrl = file ? URL.createObjectURL(file) : currentFile;

    return (
        <div className={styles.imageViewContainer}>
            <img className={styles.imageView} src={imageUrl} alt="" />
        </div>
    );
};

export default ImageViewForUpdating;
