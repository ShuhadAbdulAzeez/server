import axios from "axios"; //we use axios library for Ajax request
import { FETCH_USER } from "./types";

//action creater
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

// whenever the actioncreater is called it will return the fuction, ReducThunk will see the returned function and automatically call it with the dispatch, and then we make the request we will wait until we get the reponse back from our api, and one we have responce only that time only actually we dispatch our action.
