import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toggleLoggedIn, setCurrentUser } from "./slices/UserDataSlice";

function Login() {
  let history = useHistory();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const users = useSelector((state) => state.userData.users);
  const isLogged = useSelector((state) => state.userData.isLoggedIn);
  const dispatch = useDispatch();

  function loginHandler() {
    if (login && password) {
      const currentUser = users.find(
        (user) => user.userLogin === login && user.userPassword === password
      );

      if (currentUser) {
        dispatch(toggleLoggedIn());
        dispatch(setCurrentUser(currentUser));
        history.push("/home");
      } else {
        alert("Вы ввели неправильный логи или пароль");
      }
    } else {
      alert("Введите данные");
    }
  }

  return (
    <div className="login">
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
        <button
          className="login-button exit"
          onClick={() => history.push("home")}
        >
          X
        </button>
        <button className="login-button enter" onClick={loginHandler}>
          Y
        </button>
      </div>
    </div>
  );
}

export default Login;
