import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
} from "./CartDropdown.styles";

function CartDropdown({ cartItems, history, dispatch }) {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>

      <CustomButton
        onClick={() => {
          history.push("./checkout");
          dispatch(toggleCartHidden());
        }}>
        GO TO CHECKOUT
      </CustomButton>
    </CartDropdownContainer>
  );
}
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
