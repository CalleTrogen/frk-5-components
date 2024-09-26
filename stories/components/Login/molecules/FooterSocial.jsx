import React from 'react';
import styles from './FooterSocial.module.css';

const FooterSocial = () => {
    const socialLinks = [
        { label: 'Facebook', href: 'https://facebook.com' },
        { label: 'Instagram', href: 'https://instagram.com' },
        { label: 'LinkedIn', href: 'https://linkedin.com' },
    ];

    return (
        <div className={styles.gridItem}>
            <h4>Social Media</h4>
            <ul>
                {socialLinks.map((link, index) => (
                    <li key={index}>
                        <a href={link.href}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterSocial;