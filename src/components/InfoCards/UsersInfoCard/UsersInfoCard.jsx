import styles from "./UsersInfoCard.module.css";
import Avatar from "./Avatar";

const UsersInfoCard = ({ elementToRead }) => {
    // console.log(elementToRead.image);
    return (
        <>
            <div className={styles.top}>
                <h2 className={styles.name}>
                    {elementToRead.firstName + " " + elementToRead.lastName}
                </h2>
                <Avatar image={elementToRead.image} style={styles.circleImg} />
            </div>
            <div className={styles.bottom}>
                <div className={styles.generalInfoContainer}>
                    <label className={styles.generalLabels}>
                        {" "}
                        Correo electrónico:
                    </label>
                    <p className={styles.info}>{elementToRead.email}</p>
                </div>
                <div className={styles.generalInfoContainer}>
                    <label className={styles.generalLabels}> Contraseña:</label>
                    <p className={styles.info}>{elementToRead.password}</p>
                </div>
                <div className={styles.generalInfoContainer}>
                    <label className={styles.generalLabels}>
                        Tipo de documento:
                    </label>
                    <p className={styles.info}>
                        {elementToRead.idDocumentType}
                    </p>
                </div>
                <div className={styles.generalInfoContainer}>
                    <label className={styles.generalLabels}>
                        Número de documento:
                    </label>
                    <p className={styles.info}>{elementToRead.idDocument}</p>
                </div>
                <div className={styles.generalInfoContainer}>
                    <label className={styles.generalLabels}>
                        Identidad de género:
                    </label>
                    <p className={styles.info}>
                        {elementToRead.genderIdentity}
                    </p>
                </div>
                <div className={styles.generalInfoContainer}>
                    <label className={styles.generalLabels}>
                        Número de celular:
                    </label>
                    <p className={styles.info}>{elementToRead.phoneNumber}</p>
                </div>
                <div className={styles.generalInfoContainer}>
                    <label className={styles.generalLabels}>
                        Fecha de nacimiento:
                    </label>
                    <p className={styles.info}>{elementToRead.birthday}</p>
                </div>
                <div className={styles.generalInfoContainer}>
                    <label className={styles.generalLabels}>Rol:</label>
                    <p className={styles.info}>{elementToRead.role}</p>
                </div>
            </div>
        </>
    );
};

export default UsersInfoCard;
