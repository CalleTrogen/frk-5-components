import React from 'react';
import styles from './FooterCompany.module.css';

const FooterCompany = () => {
    const companyLinks = [
        { label: 'About Us', href: '/about' },
        { label: 'Products', href: '/products' },
        { label: 'Partners', href: '/partners' },
    ];

    return (
        <div className={styles.gridItem}>
            <h4>Company</h4>
            <ul>
                {companyLinks.map((link, index) => (
                    <li key={index}>
                        <a href={link.href}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterCompany;