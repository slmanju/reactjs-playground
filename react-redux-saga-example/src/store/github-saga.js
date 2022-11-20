import { call, put, takeLatest } from "redux-saga/effects";
import { getGitHubUser } from "../utils/github-utils";
import {
  fetchUserFailed,
  fetchUserSuccess,
  FETCH_USER_REQUESTED,
  LOADING,
} from "./github";

function* fetchUser(action) {
  yield put({ type: LOADING });
  const [error, user] = yield call(getGitHubUser, action.username);
  if (!error) {
    yield put(fetchUserSuccess(user.data));
  } else {
    yield put(fetchUserFailed());
  }
}

function* githubSaga() {
  yield takeLatest(FETCH_USER_REQUESTED, fetchUser);
}

export default githubSaga;
