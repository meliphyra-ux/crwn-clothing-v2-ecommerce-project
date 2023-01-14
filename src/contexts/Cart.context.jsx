import { createContext, useEffect, useState } from 'react';

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
    return cartItems.filter(cartItem => cartItem.id !== product.id)
  }
  return cartItems.map((cartItem) =>
  cartItem.id === product.id
    ? { ...cartItem, quantity: cartItem.quantity - 1 }
    : cartItem
);
};

const clearCartItem = (cartItems, product) => {
  return cartItems.filter(cartItem => cartItem.id !== product.id)
}

export const CartProvider = ({ children }) => {
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));

  const handleIsCartDropdownOpen = () =>
    setIsCartDropdownOpen(!isCartDropdownOpen);

  const removeItemFromCart = (product) =>
    setCartItems(removeCartItem(cartItems, product)) 

  const clearItemFromCart = (product) =>
    setCartItems(clearCartItem(cartItems, product))

  useEffect(() => {
    const totalOfCartItems = cartItems.reduce(
      (previousValue, cartItem) =>
        previousValue + cartItem.price * cartItem.quantity,
      0
    );
    setTotalCartPrice(totalOfCartItems)
  }, [cartItems])

  useEffect(() => {
    const updatedCartCounter = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCounter(updatedCartCounter);
  }, [cartItems]);

  const value = {
    isCartDropdownOpen,
    handleIsCartDropdownOpen,
    addItemToCart,
    cartItems,
    cartCounter,
    removeItemFromCart,
    clearItemFromCart,
    totalCartPrice
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
