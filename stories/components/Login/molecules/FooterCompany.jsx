import React from 'react';
import styles from './FooterCompany.module.css'; // Använda CSS-modul

const FooterCompany = () => {
    return (
        <div className={styles.footerContainer}>
            <h3 className={styles.title}>Company</h3>
            <ul className={styles.linkList}>
                <li><a href="#about">About Us</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    );
};

export default FooterCompany;