import { FETCH_USER } from "../actions/types";

// records whether or not the user is logged in.
export default function (state = null, action) {
  console.log(state);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
