import React from 'react';
import FooterTop from './FooterTop';
import FooterWidget from './FooterWidget';
import FooterBottom from './FooterBottom';

const Footer = () => {
    return (
        <footer id="footer">
            <FooterTop/>
            <FooterWidget/>
            <FooterBottom/>
        </footer>
    );
}

export default Footer;