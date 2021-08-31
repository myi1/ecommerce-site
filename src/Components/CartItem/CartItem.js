import React from "react";
import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
} from "./CartIcon.styles";

function CartItem({ item: { imageUrl, price, name, quantity } }) {
  return (
    <CartItemContainer className='cart-item'>
      <CartItemImage src={imageUrl} alt='item' />
      <ItemDetailsContainer className='cart-item__item-details'>
        <span className='cart-item__name'>{name}</span>
        <span className='cart-item__price'>
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
}

export default CartItem;
