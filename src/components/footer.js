import React from 'react';

const Footer = ({ year }) => {
    return (
        <footer className="pt-5 text-muted text-center text-small">
            <span className="pb-5">&copy; {year} Germain Nguyen</span>
        </footer>
    )
}

export default Footer;