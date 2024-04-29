import React from 'react'
import styles from "./Navbar.module.css";
import { useState } from 'react';
import { getImageUrl } from "../utils"
export const Navbar = () => {
    const [menuState, setMenuState] = useState(false);
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">RM</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn}
                    src={menuState ?
                        getImageUrl("nav/closeIcon.png")
                        : getImageUrl("nav/menuIcon.png")}
                    onClick={() => setMenuState(!menuState)}
                    alt="menu-btn" />
                <ul className={`${styles.menuItems} ${menuState && styles.menuOpen}`} >
                    <li onClick={() => setMenuState(false)}><a className={styles.menuLI} href="#about">About</a></li>
                    <li onClick={() => setMenuState(false)}><a className={styles.menuLI} href="#experience">Experience</a></li>
                    <li onClick={() => setMenuState(false)}><a className={styles.menuLI} href="#projects">Projects</a></li>
                    <li onClick={() => setMenuState(false)}><a className={styles.menuLI} href="#contact">Contacts</a></li>
                </ul>
            </div>
        </nav>
    )
}
