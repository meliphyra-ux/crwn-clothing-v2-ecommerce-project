import { createContext, useState } from 'react';

export const CartContext = createContext({
  isCartDropdownOpen: false,
  handleIsCartDropdownOpen: () => null,
});


export const CartProvider = ({ children }) => {
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);

  const handleIsCartDropdownOpen = () => setIsCartDropdownOpen(!isCartDropdownOpen)

  const value = { isCartDropdownOpen, handleIsCartDropdownOpen };
  
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
