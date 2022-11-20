import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { GitHubUser } from "./github/GitHubUser";
import { GitHubInput } from "./github/GitHubInput";
import { fetchUser, selectLoading, selectUsers } from "./store/github";

function App() {
  const users = useSelector(selectUsers);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const onAddUser = (username) => {
    dispatch(fetchUser(username));
  };

  return (
    <div className="App">
      <h3 className="title">GitHub Users</h3>
      <GitHubInput handleSubmit={onAddUser} />
      {loading && <div>Loading...</div>}
      <hr />
      {users.map((user) => (
        <GitHubUser github={user} key={user.id} />
      ))}
    </div>
  );
}

export default App;
