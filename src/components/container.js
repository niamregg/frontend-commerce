import React from 'react';
import Product from './product';
import Cart from './cart';
import Delivery from './delivery';

const Container = ({ products }) => {
    return (
        <div className="container">
            <div className="row">
                <Cart/>
                <div className="col-md-8 order-md-1">

                    <h4 className="mb-3">Catalog</h4>
                    <Product
                        products={products}
                    />
                    {/* TODO : display delivery when state is defined 
                    <h4 className="mb-3">Billing address</h4>
                    <Delivery/>
                    */}
                </div>
            </div>
        </div>
    )
};

export default Container;
