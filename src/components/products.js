import React from 'react'

const Products = ({ products }) => {
    return (
        <div>
            <center><h1>Products List</h1></center>
            {products.map((product) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{product.name}</h5>
                        <img src={product.imgUrl} width={100} height={100}/>
                        <p class="card-text">{product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Products
