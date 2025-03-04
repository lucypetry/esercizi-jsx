import React from "react";

const GithubUser = ({ username }) => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [username]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>{user.login}</h2>
      <img src={user.avatar_url} alt={user.login} width={100} />
    </div>
  );
};

export default GithubUser;
