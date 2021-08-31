import React from "react";
import SignIn from "../../Components/SignIn/SignIn";
import SignUp from "../../Components/SignUp/SignUp";
import { SignInAndUpContainer } from "./SignInAndUp.styles";

export default function SignInAndUp() {
  return (
    <SignInAndUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndUpContainer>
  );
}
