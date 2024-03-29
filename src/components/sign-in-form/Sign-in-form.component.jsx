import { useState } from 'react';

import { SignInContainer, ButtonsContainer } from './sign-in-form.styles.js';
import FormInput from '../form-input/Form-input.component';

import {
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button.component';
import { useDispatch } from 'react-redux';
import { emailSignInStart, googleSignInStart } from '../../store/user/user.action.js';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState({ ...defaultFormFields });
  const dispatch = useDispatch()
  const { email, password } = formFields;
  const resetFormFields = () => {
    setFormFields({ ...defaultFormFields });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(emailSignInStart(email, password))
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('There is no user associated with this email');
          break;
        default:
          console.log(error.message);
          break;
      }
    }
  };

  const signInWithGoogle = () => {
    dispatch(googleSignInStart())
  };
  return (
    <SignInContainer>
      <h2>Have an account?</h2>
      <span>Sign in with your email & password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button buttonType={BUTTON_TYPE_CLASSES.inverted} type="submit">
            Sign in
          </Button>
          <Button buttonType={BUTTON_TYPE_CLASSES.google} type="button" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
