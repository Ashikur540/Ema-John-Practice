import React from "react";

const Cart = (props) => {
    const {cart}= props;
    // console.log(cart);
  return (
    <div>
      <h2>Order Summery</h2>
      <p>
        Selected Items <b>{cart.length}</b>
      </p>
    </div>
  );
};

export default Cart;
