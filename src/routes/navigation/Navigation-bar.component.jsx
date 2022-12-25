import { Outlet, Link } from 'react-router-dom';
import { useContext } from 'react';

import { UserContext } from '../../contexts/User.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';

const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);
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
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
