import React from 'react';
import styles from './FooterSocial.module.css'; // Använda CSS-modul

const FooterSocial = () => {
    return (
        <div className={styles.footerContainer}>
            <h3 className={styles.title}>Follow Us</h3>
            <ul className={styles.linkList}>
                <li><a href="#facebook">Facebook</a></li>
                <li><a href="#twitter">Twitter</a></li>
                <li><a href="#instagram">Instagram</a></li>
            </ul>
        </div>
    );
};

export default FooterSocial;