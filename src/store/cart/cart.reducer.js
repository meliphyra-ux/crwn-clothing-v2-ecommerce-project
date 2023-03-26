export const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'cart/SET_CART_ITEMS',
  SET_IS_CART_DROPDOWN_OPEN: 'cart/SET_IS_CART_DROPDOWN_OPEN',
};

const INITIAL_VALUE = {
  isCartDropdownOpen: false,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_VALUE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return { ...state, cartItems: [...payload] };
    case CART_ACTION_TYPES.SET_IS_CART_DROPDOWN_OPEN:
      return {...state, isCartDropdownOpen: !state.isCartDropdownOpen}
    default:
      return state
  }
};
