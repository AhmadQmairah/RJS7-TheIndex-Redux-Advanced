import { FECTCHALLBOOKS } from "./actionType";
import axios from "axios";

export const fetchAllBooks = () => {
  return async dispatch => {
    try {
      const res = await axios.get(
        "https://the-index-api.herokuapp.com/api/books/"
      );

      dispatch({
        type: FECTCHALLBOOKS,
        payload: res.data
      });
    } catch (err) {}
  };
};
