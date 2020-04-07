import React from 'react';
import Header from './header';
import Container from './container';
import Footer from './footer';

const Body = ({ logo, products }) => {
    return (
        <div className="App">
            <Header logo={logo} />
            <Container products={products} />
            <Footer year={new Date().getFullYear()} />
        </div>
    )
}

export default Body