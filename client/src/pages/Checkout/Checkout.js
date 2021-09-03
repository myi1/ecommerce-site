import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../Components/CheckoutItem/CheckoutItem";
import StripeCheckoutButton from "../../Components/StripeCheckoutButton/StripeCheckoutButton";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import {
  HeaderContainer,
  HeaderBlock,
  CheckoutPageContainer,
  TestWarningContainer,
  TotalContainer,
} from "./Checkout.styles";

function Checkout({ cartItems, total }) {
  return (
    <CheckoutPageContainer>
      <HeaderContainer>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </HeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>
        <span>TOTAL: ${total}</span>
      </TotalContainer>
      <TestWarningContainer>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/25 - CVV: 555
      </TestWarningContainer>
      <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
