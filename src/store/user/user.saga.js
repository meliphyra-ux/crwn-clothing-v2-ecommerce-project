import { all, call, takeLatest, put } from 'redux-saga/effects';

import { USER_ACTION_TYPES } from './user.reducer';

import { signInSuccess, signInFailed, signUpFailed } from './user.action';
import {
  createUserDocumentFromAuth,
  getCurrentUser,
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
  signOutUser,
  createAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userSnapshot = yield call(createUserDocumentFromAuth, userAuth);
    yield put(
      signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      })
    );
  } catch (error) {
    console.log(error);
    yield call(signInFailed());
  }
}

function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (userAuth === null) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    console.log(error);
    yield put(signInFailed(error));
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    if (user === null) return;
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

function* signInUserWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      signInUserWithEmailAndPassword,
      email,
      password
    );
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

function* signUpUserWithEmail({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield call(getSnapshotFromUserAuth, { ...user, displayName });
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

function* signOut() {
  yield call(signOutUser);
}

function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

function* onGoogleSignIn() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* onEmailSignIn() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInUserWithEmail);
}

function* onSignUp() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUpUserWithEmail);
}

function* onSignOut() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT, signOut);
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignIn),
    call(onSignOut),
    call(onEmailSignIn),
    call(onSignUp),
  ]);
}
