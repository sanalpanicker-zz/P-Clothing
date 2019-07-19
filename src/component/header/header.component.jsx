import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './header.style.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ dropDownShow }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
          SHOP
      </Link>
      <Link className="option" to="/shop">
          CONTACT
      </Link>
      <CartIcon />
    </div>
    {dropDownShow && <CartDropDown />}
  </div>
);

const mapStateToProps = ({ cart: { dropDownShow } }) => {
  return {
    dropDownShow
  };
};
export default connect(mapStateToProps, null)(Header);
