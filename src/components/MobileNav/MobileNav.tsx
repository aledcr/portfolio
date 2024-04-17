import type React from "react"
import { useState } from "react"

import { BsList, BsXLg } from "react-icons/bs";

import styles from './mobile-nav.module.css';

export function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    function openNav() {
        setIsOpen(true);
    }

    function closeNav() {
        setIsOpen(false);
    }

    const sidenavOpenStyle: React.CSSProperties = {
        width: isOpen ? '250px' : '0',
    }

    return (
        <>
            <button className={styles['sidenav-open-btn']} onClick={openNav}>
                <BsList />
            </button>

            <div className={styles.sidenav} style={sidenavOpenStyle}>
                <button className={styles['close-btn']} onClick={closeNav}>
                    <BsXLg />
                </button>

                <ul>
                    <li>
                        <a className={styles.link} href="#">About</a>
                        <a className={styles.link} href="#">Services</a>
                        <a className={styles.link} href="#">Clients</a>
                        <a className={styles.link} href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </>
    )
}
