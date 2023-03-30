export const USER_ACTION_TYPES = {
  SIGN_OUT: 'user/SIGN_OUT',
  CHECK_USER_SESSION: 'user/CHECK_USER_SECTION',
  GOOGLE_SIGN_IN_START: 'user/GOOGLE_SIGN_IN_START',
  EMAIL_SIGN_IN_START: 'user/EMAIL_SIGN_IN_START',
  SIGN_UP_START: 'user/SIGN_UP_START',
  SIGN_IN_SUCCESS: 'user/SIGN_IN_SUCCESS',
  SIGN_UP_FAILED: 'user/SIGN_UP_FAILED',
  SIGN_IN_FAILED: 'user/SIGN_IN_FAILED',
};

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.GOOGLE_SIGN_IN_START:
    case USER_ACTION_TYPES.EMAIL_SIGN_IN_START:
    case USER_ACTION_TYPES.SIGN_UP_START:
      return { ...state, isLoading: true }
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return { ...state, currentUser: payload, isLoading: false };
    case USER_ACTION_TYPES.SIGN_UP_FAILED:
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
      return { ...state, error: payload };
    case USER_ACTION_TYPES.SIGN_OUT:
      return {...state, currentUser: null}
    default:
        return state
  }
};

