import styles from "./VisitorHome.module.css";
import WelcomeCard from "../../components/InfoCards/WelcomeCard/WelcomeCard";
import Header from "../../components/Header/Header";

const VisitorHome = () => {
    return (
        <>
            <div className={styles.home}>
                <Header />
                <WelcomeCard userName={"visitante"} />
            </div>
        </>
    );
};

export default VisitorHome;
