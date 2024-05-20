import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}>Opción 1</li>
                    <li className={styles.li}>Opción 2</li>
                    <li className={styles.li}>Opción 3</li>
                </ul>
            </nav>
            <Link to="/login" style={{ display: "flex", alignItems: "center" }}>
                {/* implement onClick={logOut} for mailAndPasswordAuth */}
                <LogoutIcon sx={{ fontSize: 34 }} />
            </Link>
        </header>
    );
};

export default Header;
