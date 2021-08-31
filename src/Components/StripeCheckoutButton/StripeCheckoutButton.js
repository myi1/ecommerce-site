import React from "react";
import StripeCheckout from "react-stripe-checkout";

function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publisablekey =
    "pk_test_51JUYQOA6KtI8um36eqe0QAZUADHUQQyf3PgcyTJJJ7giFFRNocTEe1ZrljIPFYVWMGYBNwmvjuXkBr3l2gDsoWs400ZNGBBaYS";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publisablekey}
    />
  );
}

export default StripeCheckoutButton;
