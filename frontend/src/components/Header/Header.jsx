import React, { useState } from 'react';
import {Link, NavLink} from "react-router-dom"
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import styles from "./Header.module.css"

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link to="/">Blood Donor BD</Link>
                </div>
                <nav className={`${styles.nav} ${openMenu ? styles.menuActive:styles.menuClose}`}>
                    <ul className={styles.navLinks}>
                        <li>
                            <NavLink>Home</NavLink>
                        </li>
                        <li>
                            <NavLink>Donors</NavLink>
                        </li>
                        <li>
                            <NavLink>About us</NavLink>
                        </li>
                        <li>
                            <NavLink>Contact</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={styles.headerBtn}>
                    <button className={styles.loginBtn}>Login</button>
                    <button className={styles.signupBtn}>Signup</button>
                    <button onClick={()=> setOpenMenu(!openMenu)} className={styles.mobileMenuBtn}>
                    
                    {
                        openMenu ? <RxCross2/> : <FaBarsStaggered />
                    }
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;