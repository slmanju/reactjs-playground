import { useState } from "react";

const GitHubInput = ({ handleSubmit }) => {
  const [username, setUsername] = useState("");

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setUsername("");
    handleSubmit(username);
  };

  return (
    <div>
      <form>
        <label>Name: </label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <button onClick={onSubmit}>Add</button>
      </form>
    </div>
  );
};

export { GitHubInput };
