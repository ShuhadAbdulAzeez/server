import axios from "axios"; //we use axios library for Ajax request
import { FETCH_USER } from "./types";

const fetchUser = () => {
  return function (dispatch) {
    axios
      .get("/api/current_user")
      .then((res) => dispatch({ type: FETCH_USER, payload: res }));
  };
};

// whenever the actioncreaater is called it will return the fuction, ReducThunk will see the returned function and automatically call it with the dispatch, and then we make the request we will wait until we get the reponse back from our api, and one we have responce only that time only actually we dispatch our action. 