import React, { useState, useEffect } from "react";

const GithubUser = ({ username }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (!response.ok) {
          throw new Error("User not found");
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchUserData();
    }
  }, [username]);

  if (loading) return <p>Caricamento in corso...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.login} width="100" />
          <h2>{userData.name || userData.login}</h2>
          <p>
            <strong>Username:</strong> {userData.login}
          </p>
          <p>
            <strong>Compagnia:</strong> {userData.company || "N/A"}
          </p>
          <p>
            <strong>Località:</strong> {userData.location || "N/A"}
          </p>
          <p>
            <strong>Public Repo:</strong> {userData.public_repos}
          </p>
          <p>
            <strong>Followers:</strong> {userData.followers}
          </p>
          <p>
            <strong>Following:</strong> {userData.following}
          </p>
          <p>
            <strong>Bio:</strong> {userData.bio || "No bio available"}
          </p>
          <p>
            <strong>Blog:</strong>{" "}
            <a href={userData.blog} target="_blank" rel="noopener noreferrer">
              {userData.blog}
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default GithubUser;
