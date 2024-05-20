import WavingHandIcon from "@mui/icons-material/WavingHand";
import styles from "./WelcomeCard.module.css";

const WelcomeCard = ({ userName }) => {
    return (
        <div className={styles.welcomeCardContainer}>
            <div className={styles.welcomeCard}>
                <WavingHandIcon
                    sx={{
                        color: "#FFC84A",
                        fontSize: "2em",
                        paddingRight: ".1em",
                    }}
                />
                <h1>!Bienvenido {userName}!</h1>
            </div>
        </div>
    );
};

export default WelcomeCard;
