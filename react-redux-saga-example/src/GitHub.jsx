import './GitHub.css';

const GitHub = ({ github }) => {
  return (
    <div className="container">
      <div className="login">{github.login}</div>
      <div>{github.name}</div>
      <div>{github.bio}</div>
      <div>{github.url}</div>
      <div>{github.image}</div>
    </div>
  );
};

export { GitHub };
