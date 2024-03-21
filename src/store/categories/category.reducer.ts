import { AnyAction } from "redux";

import { Category } from "./category.types";

import {
  fetchCategoriesStart,
  fetchCategoriesSucess,
  fetchCategoriesFailed,
} from "./category.action";

export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: Boolean;
  readonly error: Error | null;
};

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {} as AnyAction
): CategoriesState => {
  if (fetchCategoriesStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (fetchCategoriesSucess.match(action)) {
    return { ...state, categories: action.payload, isLoading: false };
  }

  if (fetchCategoriesFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }

  return state;
};

// export const categoriesSlice = createSlice({
//   name: "categories",
//   initialState: CATEGORIES_INITIAL_STATE,
//   reducers: {
//     setCategories(state, action) {
//       state.categories = action.payload;
//     },
//   },
// });

// export const { setCategories } = categoriesSlice.actions;
