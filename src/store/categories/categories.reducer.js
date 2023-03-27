export const CATEGORIES_ACTION_TYPES = {
  FETCH_CATEGORIES_START: 'category/FETCH_CATEGORIES_START',
  FETCH_CATEGORIES_SUCCESS: 'category/FETCH_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_FAILED: 'category/FETCH_CATEGORIES_FAILED',
};

const INITIAL_VALUE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (state = INITIAL_VALUE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return {...state, isLoading: true}
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: payload, isLoading: false };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return { ...state, error: payload, isLoading: false }
    default:
      return state;
  }
};
