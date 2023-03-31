import axios from "axios"; //we use axios library for Ajax request
import { FETCH_USER, FETCH_SURVEYS } from "./types";

//action creater
// FETCH_USER
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async dispatch => {
  const res = await axios.post("/api/stripe", token); 

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post("/api/surveys", values);

  history.push('/surveys');
  dispatch({ type: FETCH_USER, payload: res.data });
};

// whenever the actioncreater is called it will return the fuction, ReduxThunk will see the returned function and automatically call it with the dispatch, and then we make the request we will wait until we get the reponse back from our api, and one we have responce only that time only actually we dispatch our action.

//dispatch sends the action to all the different reducers in the store, causing then to instantly recalculate the app state.

// FETCH_SURVEYS 
export const fetchSurveys =() => async dispatch => {
  const res = await axios.get("/api/surveys");

  dispatch({ type: FETCH_SURVEYS, payload: res.data })
}; 