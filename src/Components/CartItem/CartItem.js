import React from "react";
import "./CartItem.scss";

function CartItem({ item: { imageUrl, price, name, quantity } }) {
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt='item' />
      <div className='cart-item__item-details'>
        <span className='cart-item__name'>{name}</span>
        <span className='cart-item__price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
}

export default CartItem;
