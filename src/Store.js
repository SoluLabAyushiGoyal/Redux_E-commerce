import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers/RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? // eslint-disable-next-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

export default function configureStore() {
  return createStore(RootReducer, composeEnhancers(applyMiddleware(thunk)));
}
