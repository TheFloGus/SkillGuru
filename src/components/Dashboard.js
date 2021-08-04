import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { useHistory } from "react-router-dom";
import { toggleLoggedIn, unsetCurrentUser } from "./slices/UserDataSlice";
import DashItem from "./DashItem";

function Dashboard() {
  const history = useHistory();
  const currentUser = useSelector((state) => state.userData.currentUser);
  const dispatch = useDispatch();

  function logoutHandler() {
    dispatch(toggleLoggedIn());
    dispatch(unsetCurrentUser({}));
  }
  return (
    <>
      <div className="dashboard">
        <div className="dash-user-info">
          <div className="dash-avatar">
            <img
              src={currentUser.userAvatar}
              className="user-avatar"
              alt="user avatar"
            ></img>
          </div>
          <div className="dash-data">
            <p className="dash-title">Name:</p>
            <DashItem
              userKey="userName"
              userField={currentUser.userName}
              userIndex={currentUser.index}
            />
            <p className="dash-title">Surname:</p>
            <DashItem
              userKey="userSurname"
              userField={currentUser.userSurname}
              userIndex={currentUser.index}
            />
            <p className="dash-title">Login:</p>
            <DashItem
              userKey="userLogin"
              userField={currentUser.userLogin}
              userIndex={currentUser.index}
            />
          </div>
        </div>
        <div className="dash-buttons">
          <button className="dash-button back" onClick={() => history.push('/home')}>
            Back
          </button>
          <button className="dash-button logout" onClick={logoutHandler}>
            LogOut
          </button>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
