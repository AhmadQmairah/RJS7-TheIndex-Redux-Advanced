import { FECTFCHALLAUTHORS } from "../actions/actionType";

const initialState = {
  authors: [],
  loading: true,
  currentAuthor: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FECTFCHALLAUTHORS:
      return {
        ...state,
        authors: action.payload,
        loading: false
      };

    default:
      return state;
  }
};
