import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/logos/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { combineReducers } from "redux";

function Header({ currentUser }) {
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
          <div className='header__option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='header__option' to='/signin'>
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
