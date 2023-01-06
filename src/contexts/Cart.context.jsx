import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext({
  isCartDropdownOpen: false,
  handleIsCartDropdownOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  cartCounter: 0,
});

const addItemCart = (cartItems, product) => {
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

export const CartProvider = ({ children }) => {
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);

  const addItemToCart = (product) =>
    setCartItems(addItemCart(cartItems, product));

  const handleIsCartDropdownOpen = () =>
    setIsCartDropdownOpen(!isCartDropdownOpen);

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
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
