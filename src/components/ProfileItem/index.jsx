import React from "react";
import "./style.scss";

const ProfileItem = ({item}) => {
  return (
    <div className="profile-item">
      <div className="profile-image">
        <img src={item.avatar} alt="Profile" />
      </div>
      <div className="profile-desc">
        <div className="profile-name">{item.first_name} {item.last_name}</div>
        <div className="profile-email">
          <p>User email address</p>
          <p>{item.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileItem;
