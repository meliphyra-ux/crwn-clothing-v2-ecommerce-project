import { Outlet, Link } from 'react-router-dom';
import { useContext } from 'react';

import { UserContext } from '../../contexts/User.context';
import { CartContext } from '../../contexts/Cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';
import CartIcon from '../../components/cart-icon/Cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/Cart-dropdown.component';

const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartDropdownOpen } = useContext(CartContext)
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
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={handleSignOut}>SIGN OUT</span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
          {isCartDropdownOpen && <CartDropdown />}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
