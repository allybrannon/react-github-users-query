import React from "react";
import UserCard from "./UserCard";

const UserCardList = props => {
  const { usersInfo } = props;
  return (
    <div>
      {usersInfo.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserCardList;
