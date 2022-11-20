import axios from "axios";

const withError = (promise) => promise.then((data) => [null, data]).catch((err) => [err]);

export const getGitHubUser = async (username) => {
  return await withError(axios.get(`https://api.github.com/users/${username}`));
};
