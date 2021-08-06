import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  toggleLoggedIn,
  setCurrentUser,
  addUser,
} from "./slices/UserDataSlice";
import avatar from "./img/Avatar.png";
import PasswordStrengthMeter from "./PasswordStrengthMeter";

function Registartion() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userData.users);

  function registrationHandler(e) {
	e.preventDefault();
    if (name && surname && login && password) {
      if (users.some((user) => user.userLogin.toLowerCase() === login.toLowerCase())) {
        alert("this login is already registered");
      } else {
        const index = users.length;
		const newUser = {
			userName: name,
			userSurname: surname,
			userLogin: login,
			userPassword: password,
			userCourses: [],
			userAvatar: avatar,
			isAdmin: isAdmin,
			isTeacher: isTeacher,
		}
        dispatch(addUser(newUser));
        dispatch(setCurrentUser(index));
        dispatch(toggleLoggedIn());
		history.push("/dashboard")
      }
    }else {
		alert('Enter your data plz')
	}
  }

  return (
    <>
      <form
        className="registration"
        onReset={() => history.push("/home")}
        onSubmit={registrationHandler}
      >
        <div className="login-field">
          <p className="login-title">Name</p>
          <input
            type="text"
            className="login-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <p className="login-title">Surname</p>
          <input
            type="text"
            className="login-input"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          ></input>
          <p className="login-title">Login</p>
          <input
            type="text"
            className="login-input"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          ></input>
          <p className="login-title">Password</p>
          <input
            type="password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <PasswordStrengthMeter password={password} />
        </div>
        <div className="reg-options">
          <label>
            <input
              type="checkbox"
              className="reg-checkbox"
              onChange={(e) =>
                setIsAdmin(e.target.checked)
              }
            ></input>
            Admin
          </label>

          <label>
            <input
              type="checkbox"
              className="reg-checkbox"
              onChange={(e) =>
                setIsTeacher(e.target.checked)
              }
            ></input>
            Teacher
          </label>
        </div>
        <div className="login-buttons">
          <button className="login-button exit" type="reset">
            X
          </button>
          <button className="login-button enter" type="submit">
            Y
          </button>
        </div>
      </form>
    </>
  );
}

export default Registartion;
