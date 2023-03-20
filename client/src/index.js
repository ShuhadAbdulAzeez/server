import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk';

import App from "./components/App";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk)); // The entire purpose of redux-Thunk is to allow us to write action creaters that break the speceficly the requirment that we have to immediatlly return a action from every action creater that we create.

// The pupose of middleware or reduxThunk is to inspect what evervalue we return from action creater ( in src/actions/index.js). if reduxThunk sees that we returned function insted of normal action redux thunk will automatically call the funtion and pass inn dispatch function as an argument. ( return function (dispatch)).

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
// So now we are showing the App component but we are also created the redux store at the very top level of our application and hooked that to the react side of the application by placing the Provider Tag. and Provider tag are here is the react component that's now how to rechanges from our redux store any time at redux store get some new state produced inside of it {} Provider will inform all the children components so essentialy everything in the app renders that some new state is available and will update all new components with state.

// console.log("STRIPE KEY IS", process.env.REACT_APP_STRIPE_KEY);
// console.log("Environment is", process.env.NODE_ENV);