export const CATEGORIES_ACTION_TYPES = {
  SET_CATEGORIES_MAP: 'category/SET_CATEGORIES_MAP',
};

const INITIAL_VALUE = {
  categoriesMap: {},
};

export const categoriesReducer = (state = INITIAL_VALUE, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'category/SET_CATEGORIES_MAP':
      return { ...state, categoriesMap: payload };
    default:
      return state;
  }
};
