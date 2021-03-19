import { createStore } from "redux";

const initialState = {
  loggedIn: false,
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, loggedIn: true };
    default:
      return state;
  }
}

const Store = createStore(loginReducer);

export default Store;
