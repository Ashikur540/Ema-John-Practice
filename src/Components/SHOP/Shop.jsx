import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToLs } from '../Utilities/ManageLS';
import './Shop.css';
const Shop = () => {

    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('products.json').then(res => res.json()).then(data => setProducts(data));
    }, [])

    const handleAddToCart = (product) => {
        // console.log("Clicked:",product);
        // a=[1,2,3]
        // b=[...a,6,7]  /* 1,2,3,6,7] */
        let newcart = [...cart, product]
        setCart(newcart);
        addToLs(product.id)
    }
    return (
        <div className="main">
            {/* <h4>Total found: {products.length}</h4> */}
            <div className="cards-container">


                {
                    products.map(productItem => <Product key={productItem.id} product={productItem}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="side-bars">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;