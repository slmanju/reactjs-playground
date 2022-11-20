import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import createSagaMiddleware from "redux-saga";

import { githubReducer } from "./github";
import githubSaga from "./github-saga";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ githubReducer });
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(githubSaga);

export default store;
