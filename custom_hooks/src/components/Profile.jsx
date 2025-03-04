import React, { useEffect } from "react";
import useGithubUser from "../hooks/useGitHubUsers";

const GithubProfile = ({ username }) => {
  const { user, loading, error, fetchUserData } = useGithubUser(username);

  useEffect(() => {
    if (username) fetchUserData();
  }, [username]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} width="100" />
          <h2>{user.name}</h2>
          <p>{user.login}</p>
        </div>
      )}
    </div>
  );
};

export default GithubProfile;
