import React from "react";
import useGithubUser from "./hook/useGithubUser";

const ShowGithubUser = ({ username }) => {
  const { user, isLoading, isError, refetch } = useGithubUser(username);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data.</p>;

  return (
    <div>
      {user && (
        <>
          <h2>{user.login}</h2>
          <img src={user.avatar_url} alt={user.login} width={100} />
          <button onClick={() => refetch()}>Refresh</button>
        </>
      )}
    </div>
  );
};

export default ShowGithubUser;
