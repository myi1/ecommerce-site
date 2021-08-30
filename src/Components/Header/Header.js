import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/logos/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

function Header({ currentUser, hidden }) {
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
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
