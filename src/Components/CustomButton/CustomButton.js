import React from "react";
import { CustomButtonContainer } from "./CustomButton.styles";

export default function CustomButton({ children, ...otherProps }) {
  return (
    <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
  );
}
