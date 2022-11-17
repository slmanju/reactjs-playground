import { useSelector } from 'react-redux';
import './App.css';
import { GitHub } from './GitHub';
import { GitHubInput } from './GitHubInput';
import { selectUsers } from './store/github-duck';

function App() {
  const users = useSelector(selectUsers);

  return (
    <div className="App">
      <GitHubInput />
      {users.map(user => <GitHub github={user} />)}
    </div>
  );
}

export default App;
