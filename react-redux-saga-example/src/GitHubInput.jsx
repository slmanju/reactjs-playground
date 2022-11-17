import { useState } from "react";

const GitHubInput = () => {
  const [username, setUsername] = useState("");

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    alert("A name was submitted: " + username);
    event.preventDefault();
  };

  return (
    <div>
      <label>
        Name:
        <input type="text" value={username} onChange={handleChange} />
      </label>
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export { GitHubInput };
