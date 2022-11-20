import { createSelector } from "reselect";

export const FETCH_USER_REQUESTED = "github/fetch";
export const FETCH_USER_SUCCESS = "github/fetchSuccess";
export const FETCH_USER_FAILED = "github/fetchFailed";
export const LOADING = "github/loading";

export const fetchUser = (username) => {
  return {
    type: FETCH_USER_REQUESTED,
    username,
  };
};

export const fetchUserSuccess = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    user,
  };
};

export const fetchUserFailed = () => {
  return { type: FETCH_USER_FAILED };
};

const initialState = {
  loading: false,
  users: [],
};

export const githubReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      const { user } = action;
      return {
        loading: false,
        users: [
          ...state.users,
          {
            id: user.id,
            username: user.login,
            name: user.name,
            url: user.html_url,
            bio: user.bio,
            image: user.avatar_url,
          },
        ],
      };
    case FETCH_USER_FAILED:
      return {
        ...state,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
  }
  return state;
};

const selectGitHub = (state) => state.githubReducer;
export const selectUsers = createSelector(selectGitHub, (state) => state.users);
export const selectLoading = createSelector(
  selectGitHub,
  (state) => state.loading
);
