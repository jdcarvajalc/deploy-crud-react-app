import "./Home.css";
import { useGoogleAuth } from "../../context/GoogleAuthContext";
import WelcomeCard from "../../components/InfoCards/WelcomeCard/WelcomeCard";
import HeaderForGoogleUsers from "../../components/Header/HeaderForGoogleUsers";

const Home = () => {
    const { googleUser } = useGoogleAuth();
    return (
        <>
            <div className="home">
                <HeaderForGoogleUsers />
                <WelcomeCard userName={googleUser.displayName} />
            </div>
        </>
    );
};
export default Home;
