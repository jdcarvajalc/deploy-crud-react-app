import styles from "./DropDown.module.css";
const DropDown = ({ submenus, dropDown }) => {
    return (
        // <ul className={styles.dropdown}>
        <ul className={`${styles.dropdown} ${dropDown ? styles.show : ""}`}>
            {submenus.map((submenu, index) => (
                <li key={index} className={styles.custom}>
                    <a href={submenu.url} className={styles.aColor}>
                        {submenu.title}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default DropDown;
