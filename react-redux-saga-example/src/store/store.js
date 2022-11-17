import { combineReducers, legacy_createStore as createStore } from "redux";
import { likesReducer } from "./like-slice";
import { githubReducer } from "./github-duck";

const rootReducer = combineReducers({
  likes: likesReducer,
  githubReducer
});

const store = createStore(rootReducer);

export default store;