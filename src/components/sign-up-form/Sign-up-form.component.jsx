import { useState } from 'react';

import { SignUpContainer } from './sign-up-form.styles.js';
import FormInput from '../form-input/Form-input.component';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button.component';
import { useDispatch } from 'react-redux';
import { signUpStarted } from '../../store/user/user.action.js';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState({ ...defaultFormFields });
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch()

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
      if (password === confirmPassword) {
        dispatch(signUpStarted(email, password, displayName))
        resetFormFields();
      } else {
        throw Error("Passwords don't match");
      }
    } catch (error) {
      if (error.code === 'auth/email-already-in-use')
        alert('Email is already in use');
      else alert(error.message);
    }
  };
  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email & password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button buttonType={BUTTON_TYPE_CLASSES.google} type="submit">
          Sign up
        </Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
