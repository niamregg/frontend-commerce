import React from 'react';

const Product = ({ products }) => {
    return (
        <div className="card-deck text-center">
            {products.map((product) => (
                <div className="col-md-6">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-header">
                            <h5 className="my-0 font-weight-normal">{product.name}</h5>
                        </div>
                        <div className="card-body">
                            <img src={product.image} width={280} height={195}/>
                            <h5 className="card-title pricing-card-title">{product.price} €</h5>
                            <button type="button" className="btn btn-lg btn-block btn-info">Ajouter au panier</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Product;