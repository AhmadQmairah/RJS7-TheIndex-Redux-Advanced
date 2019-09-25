import { FECTCHALLBOOKS } from "../actions/actionType";

const initialState = {
  books: [],
  loading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FECTCHALLBOOKS:
      return {
        ...state,
        books: action.payload,
        loading: false
      };

    default:
      return state;
  }
};
