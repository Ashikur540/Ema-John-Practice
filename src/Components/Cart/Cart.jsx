import React from "react";
import "./Cart.css";
const Cart = (props) => {
    const { cart } = props;

    let totalPrice = 0,
        shippingCost = 0;

    for (const product of cart) {
        console.log(product);
        totalPrice += product.price;
        shippingCost += product.shipping;
    }
    let tax = (totalPrice * 0.1).toFixed(2);

    let grandTotal = totalPrice + shippingCost + parseFloat(tax);

    // console.log(cart);
    return (
        <div className="carts-container">
            <h2>Order Summery</h2>
            <p>
                Selected Items <b>{cart.length}</b>
            </p>
            <p>
                Total price <b>$ {totalPrice}</b>
            </p>
            <p>
                Total shiping: <b>$ {shippingCost}</b>
            </p>
            <p>
                Tax: <b>$ {tax}</b>
            </p>

            <h3>Grand Total:{grandTotal}</h3>
        </div>
    );
};

export default Cart;
