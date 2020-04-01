import React from "react";

const UserCard = ({ user: { login, avatar_url, html_url, repos_url } }) => {
  return (
    <div>
      <img src={avatar_url} alt="userpic" width="100px" />
      <a href={html_url}>
        <p>{login}</p>
        <p>{repos_url}</p>
      </a>
    </div>
  );
};

export default UserCard;
