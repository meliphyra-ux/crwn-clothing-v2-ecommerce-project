import { createContext, useReducer } from 'react';
import { createAction } from '../utils/reducer/reducer.utils';

export const CartContext = createContext({
  isCartDropdownOpen: false,
  handleIsCartDropdownOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  cartCounter: 0,
  removeItemFromCart: () => null,
  clearItemFromCart: () => null,
  totalCartPrice: 0,
});

const addCartItem = (cartItems, product) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === product.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...product, quantity: 1 }];
};

const removeCartItem = (cartItems, product) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== product.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === product.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, product) => {
  return cartItems.filter((cartItem) => cartItem.id !== product.id);
};

export const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_IS_CART_DROPDOWN_OPEN: 'SET_IS_CART_DROPDOWN_OPEN',
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_IS_CART_DROPDOWN_OPEN':
      return { ...state, isCartDropdownOpen: !state.isCartDropdownOpen };
    case 'SET_CART_ITEMS':
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

const INITIAL_STATE = {
  isCartDropdownOpen: false,
  cartItems: [],
  cartCounter: 0,
  totalCartPrice: 0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { isCartDropdownOpen, cartItems, cartCounter, totalCartPrice } = state;

  const updateCartItemsReducer = (cartItems) => {
    const totalPriceOfCartItems = cartItems.reduce(
      (previousValue, cartItem) =>
        previousValue + cartItem.price * cartItem.quantity,
      0
    );

    const updatedCartCounter = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const payload = {
      cartItems,
      cartCounter: updatedCartCounter,
      totalCartPrice: totalPriceOfCartItems,
    };
    dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload));
  };

  const addItemToCart = (product) => {
    const newItems = addCartItem(cartItems, product);
    updateCartItemsReducer(newItems);
  };

  const handleIsCartDropdownOpen = () => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_DROPDOWN_OPEN));
  };

  const removeItemFromCart = (product) => {
    const newItems = removeCartItem(cartItems, product);
    updateCartItemsReducer(newItems);
  };

  const clearItemFromCart = (product) => {
    const newItems = clearCartItem(cartItems, product);
    updateCartItemsReducer(newItems);
  };

  const value = {
    isCartDropdownOpen,
    handleIsCartDropdownOpen,
    addItemToCart,
    cartItems,
    cartCounter,
    removeItemFromCart,
    clearItemFromCart,
    totalCartPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
