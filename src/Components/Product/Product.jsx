import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';
const Product = (props) => {
    const { id,img, name, price, seller, ratings } = (props.product);
const {handleAddToCart,product}=props;


    return (

        <div className="card">
            <img src={img} alt="" srcset="" />
            <div className="card-details">
                <h4>{name}</h4>
                <p>Price: {price}</p>
                <p>Seller: {seller}</p>
                <small>Ratings: {ratings}</small>
            </div>
            <button onClick={()=>handleAddToCart(product)}>Add to cart <i class="fa-solid fa-cart-shopping"></i>
            
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>

    );
};

export default Product;