import styles from "./ImageView.module.css";

const ImageView = ({ file }) => {
    return (
        <div className={styles.imageViewContainer}>
            <img
                className={styles.imageView}
                src={
                    file
                        ? URL.createObjectURL(file)
                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt=""
            />
        </div>
    );
};

export default ImageView;
