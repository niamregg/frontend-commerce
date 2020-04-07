import React from 'react';

const Header = ({ logo }) => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    )
};

export default Header;