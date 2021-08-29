import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/logos/crown.svg";
import { auth } from "../../firebase/firebase.utils";

export default function Header({ currentUser }) {
  return (
    <div className='header'>
      <Link to='/' className='header__logo-container'>
        <Logo className='header__logo' />
      </Link>
      <div className='header__options'>
        <Link className='header__option' to='/shop'>
          SHOP
        </Link>
        <Link className='header__option' to='/shop'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link classname='option' to='/signin'>
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
}
