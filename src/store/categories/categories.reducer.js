export const CATEGORIES_ACTION_TYPES = {
  SET_CATEGORIES: 'category/SET_CATEGORIES',
};

const INITIAL_VALUE = {
  categories: [],
};

export const categoriesReducer = (state = INITIAL_VALUE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return { ...state, categories: payload };
    default:
      return state;
  }
};
