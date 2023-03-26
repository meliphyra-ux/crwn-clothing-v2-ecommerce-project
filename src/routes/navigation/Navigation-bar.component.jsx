import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartDropdownOpen } from '../../store/cart/cart.selectors';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { NavigationContainer, NavLink, LogoContainer, NavLinksContainer } from './navigation.styles.js';
import CartIcon from '../../components/cart-icon/Cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/Cart-dropdown.component';


const NavigationBar = () => {
  const currentUser = useSelector(selectCurrentUser)
  const isCartDropdownOpen = useSelector(selectIsCartDropdownOpen)
  const handleSignOut = async () => {
    try{
      await signOutUser()
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <span className="nav-link" onClick={handleSignOut}>SIGN OUT</span>
          ) : (
            <NavLink to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
          {isCartDropdownOpen && <CartDropdown />}
        </NavLinksContainer>
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default NavigationBar;