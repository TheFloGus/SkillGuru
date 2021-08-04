import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { setCurrentUser, changeUserData } from "./slices/UserDataSlice";

function DashItem({ userField, userIndex, userKey }) {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(userField);
  const users = useSelector((state) => state.userData.users);
  const dispatch = useDispatch();

  function userEditHandler() {
    if (userKey === "userLogin") {
      if (
        users.some(
          (user) => user.userLogin.toLowerCase() === value.toLowerCase()
        )
      ) {
        alert("This username is already taken");
      } else {
        dispatch(
          changeUserData({
            index: userIndex,
            userKey: userKey,
            newValue: value,
          })
        );
        dispatch(setCurrentUser(userIndex));
        setEdit(false);
      }
    } else {
      dispatch(
        changeUserData({ index: userIndex, userKey: userKey, newValue: value })
      );
      dispatch(setCurrentUser(userIndex));
      setEdit(false);
    }
  }

  return (
    <div className="dash-edit">
      {edit ? (
        <input
          className="dash-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
      ) : (
        <div className="dash-item">{userField}</div>
      )}
      {edit ? (
        <>
          <button
            className="dash-edit-btn"
            onClick={() => {
              setValue(userField);
              setEdit(false);
            }}
          >
            X
          </button>
          <button className="dash-edit-btn" onClick={userEditHandler}>
            Conf
          </button>
        </>
      ) : (
        <button className="dash-edit-btn" onClick={() => setEdit(!edit)}>
          Edit
        </button>
      )}
    </div>
  );
}

export default DashItem;
