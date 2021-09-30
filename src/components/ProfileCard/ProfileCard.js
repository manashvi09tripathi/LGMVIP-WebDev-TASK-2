import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ avatar, FirstName, LastName, email }) => {
  return (
    <div className="ProfileCard-Container">
      <div className="ProfileCard-Img">
        <img alt="profile" src={avatar} />
      </div>
      <h1>
        {FirstName}
        {LastName}
      </h1>
      <p>{email}</p>
    </div>
  );
};

export default ProfileCard;
