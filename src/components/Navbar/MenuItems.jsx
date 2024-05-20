import DropDown from "./DropDown";
import styles from "./MenuItems.module.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
const MenuItems = ({items}) => {
    const [dropDown, setDropDown] = useState(false);

    return ( 
        <li className={styles.li}>
            {items.submenu?(
                    <>
                        <button 
                            type="button" 
                            aria-haspopup="menu"
                            aria-expanded={dropDown?true:false}
                            onClick={()=>setDropDown((prev)=>!prev)}
                        >
                            {items.title}{''}
                            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="m3 6.75 9 10.5 9-10.5H3Z"></path>
                            </svg>
                        </button>
                        <DropDown submenus={items.submenu} dropDown={dropDown}/>
                    </>
                ):(
                    <Link className={styles.li} to={items.url}>{items.title}</Link>
                )
            }
        </li>
    );
}

export default MenuItems;