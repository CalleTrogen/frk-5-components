import React from 'react';
import FooterCompany from '../molecules/FooterCompany';
import FooterSocial from '../molecules/FooterSocial';
import FooterNavigate from '../molecules/FooterNavigate';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <h3 className={styles.title}>Quick Links</h3>
            <div
                className={styles.gridContainer}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',  // Tre kolumner för layout
                    gap: '20px',  // Mellanrum mellan kolumner
                }}
            >
                <FooterNavigate />  {/* Navigationslänkar */}
                <FooterCompany />   {/* Företagslänkar */}
                <FooterSocial />    {/* Sociala medielänkar */}
            </div>
        </div>
    );
};

export default Footer;