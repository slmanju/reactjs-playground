import './GitHub.css';

const GitHubUser = ({ github }) => {
  return (
    <div className="container">
      <div className="img-container">
        <img src={github.image} className="img" />
      </div>
      <div className="data">
        <div>{github.name}</div>
        <div>{github.bio}</div>
        <a href={github.url} target="_blank">{github.username}</a>
      </div>
    </div>
  );
};

export { GitHubUser };
