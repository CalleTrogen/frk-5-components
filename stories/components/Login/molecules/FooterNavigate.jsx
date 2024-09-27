import React from 'react';
import styles from './FooterNavigate.module.css'; // Använda CSS-modul

const FooterNavigate = () => {
    return (
        <div className={styles.footerContainer}>
            <h3 className={styles.title}>Navigate</h3>
            <ul className={styles.linkList}>
                <li><a href="#home">Home</a></li>
                <li><a href="#coffee">Coffee</a></li>
                <li><a href="#tea">Tea</a></li>
            </ul>
        </div>
    );
};

export default FooterNavigate;