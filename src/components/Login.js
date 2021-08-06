import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { toggleLoggedIn, setCurrentUser } from "./slices/UserDataSlice";

function Login() {
  let history = useHistory();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const users = useSelector((state) => state.userData.users);
  const dispatch = useDispatch();

  function loginHandler(e) {
    e.preventDefault();
    if (login && password) {
      const currentUser = users.find(
        (user) =>
          user.userLogin.toLowerCase() === login.toLowerCase() &&
          user.userPassword === password
      );
      const userIndex = users.findIndex(
        (user) =>
          user.userLogin.toLowerCase() === login.toLowerCase() &&
          user.userPassword === password
      );

      if (currentUser) {
        dispatch(toggleLoggedIn());
        dispatch(setCurrentUser(userIndex));
        history.push("/dashboard");
      } else {
        alert("Invalid login or password");
      }
    } else {
      alert("Please enter the data");
    }
  }

  return (
    <>
      <form
        className="login"
        onSubmit={loginHandler}
        onReset={() => history.push("/home")}
      >
        <div className="login-field">
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
      <div className="registration-message">
        <p className="registration-message-title">Don't have an account yet?</p>
        <Link className="registration-message-link" to="/auth/registration">
          Register
        </Link>
      </div>
    </>
  );
}

export default Login;
