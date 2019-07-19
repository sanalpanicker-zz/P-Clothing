import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import toggleCart from '../../reducer/cart/cart.action';
import './cart-icon.style.scss';

export const CartIcon = ({ toggleCart1 }) => {
  console.log('****');
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" onClick={toggleCart1} />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCart1: () => {
      dispatch(toggleCart());
    }
  };
};
export default connect(null, mapDispatchToProps)(CartIcon);
