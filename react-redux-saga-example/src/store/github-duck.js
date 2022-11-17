import { createSelector } from "reselect";

const FETCH = "github/fetch";

const getUsers = () => {
  return { type: FETCH };
};

const initialState = [
  {
    login: "slmanju",
    name: "Manjula Jayawardana",
    url: "https://api.github.com/users/slmanju",
    bio: "Java | Architecture",
    image: "https://avatars.githubusercontent.com/u/30832256?v=4",
  },
];

const githubReducer = (state = initialState, action) => {
  return state;
};

const selectGitHub = (state) => state.githubReducer;
const selectUsers = createSelector(selectGitHub, (users) => users);

export { getUsers, githubReducer, selectUsers };
