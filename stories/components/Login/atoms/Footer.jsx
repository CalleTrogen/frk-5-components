import React from 'react';
import styles from './Footer.module.css'; // Använda CSS-modul
import FooterCompany from '../molecules/FooterCompany';
import FooterSocial from '../molecules/FooterSocial';
import FooterNavigate from '../molecules/FooterNavigate';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.gridContainer} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                <FooterNavigate />
                <FooterCompany />
                <FooterSocial />
            </div>
        </div>
    );
};

export default Footer;