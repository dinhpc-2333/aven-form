import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import formReducer from "./form/reducer";
import formSagas from "./form/sagas";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  formReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(formSagas);

export default store;
