import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/logos/crown.svg";

export default function Header() {
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
      </div>
    </div>
  );
}
