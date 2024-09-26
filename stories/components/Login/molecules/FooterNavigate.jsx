// Navigate.jsx
import React from 'react';
import styles from './FooterNavigate.module.css'; // Skapa separat CSS-fil om du behöver styla

const Navigate = () => {
    return (
        <div className={styles.navigateContainer}>
            <h3 className={styles.title}>Navigate</h3>
            <ul className={styles.linkList}>
                <li><a href="#home">Home</a></li>
                <li><a href="#coffee">Coffee</a></li>
                <li><a href="#tea">Tea</a></li>
            </ul>
        </div>
    );
};

export default Navigate;