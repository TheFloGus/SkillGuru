import React from "react";

function Feedback({ user }) {
  return (
    <div className="feedback">
      <div className="nav-img" style={{ margin: "10px" }}>
        <img
          src={user.userAvatar}
          width="150px"
          height="150px"
          className="nav-avatar"
          alt="user avatar"
        ></img>
      </div>
      <div className="feedback-name">
        <h3 className="feedback-name">
          {user.userName + " " + user.userSurname}
        </h3>
      </div>
      <div className="feedback-text">
        <p className="feedback-text-child">{user.feedback}</p>
      </div>
    </div>
  );
}

export default Feedback;
