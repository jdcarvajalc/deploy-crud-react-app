import {menuItemsData} from "../../utils/menuItemsData";
import MenuItems from "./MenuItems";
import styles from "./Navbar.module.css"
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        {menuItemsData.map((menu, index) =>{
          return <MenuItems items={menu} key={index}></MenuItems>
        })}
      </ul>
    </nav>
  );
};
export default Navbar;