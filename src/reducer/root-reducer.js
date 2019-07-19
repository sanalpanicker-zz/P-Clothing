import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

//call combine reducer and pass in the inidividual reducers
export default combineReducers({
  user: userReducer,
  cart: cartReducer
});
