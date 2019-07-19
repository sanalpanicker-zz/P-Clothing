import Action from './cart.types';

const INITIAL_STATE = {
  dropDownShow: false
};

const cartReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case Action.TOGGLE_CART:
      return {
        ...state,
        dropDownShow: !state.dropDownShow
      };
    default:
      return state;
  }
};

export default cartReducer;
