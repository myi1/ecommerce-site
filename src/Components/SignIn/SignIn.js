import React, { Component } from "react";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import {
  signInWithGoogle,
  auth,
  provider,
} from "../../firebase/firebase.utils";
import "./SignIn.scss";
// import { GoogleAuthProvider } from "firebase/auth";

// const provider = new GoogleAuthProvider();

export default class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onsubmit={this.handleSubmit}>
          <FormInput
            name='email'
            value={this.state.email}
            required
            label='email'
          />

          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />

          <div className='buttons'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton
              onClick={() => signInWithGoogle(auth, provider)}
              isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
