import "../style/main.scss";
import React from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import logo from "./img/logo-fill.png";
import auth from "./img/user.svg";
import Login from "./Login";
import { useSelector } from "react-redux";
import Registration from "./Registration";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import MyCourses from "./MyCourses";

function Nav() {
  const isLogged = useSelector((state) => state.userData.isLoggedIn);
  const currentUser = useSelector((state) => state.userData.currentUser);

  return (
    <>
      <header className="nav-bar">
        <div className="nav-menu">
          <div className="nav-logo">
            <NavLink to="/home">
              <img
                src={logo}
                width="120px"
                height="120px"
                alt="SkillGuru logo"
              ></img>
            </NavLink>
          </div>
          <NavLink
            to="/home"
            activeClassName="active-item"
            className="nav-item"
          >
            Home
          </NavLink>
          <NavLink
            to="/courses"
            activeClassName="active-item"
            className="nav-item"
          >
            Courses
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="active-item"
            className="nav-item"
          >
            About
          </NavLink>
          {isLogged && currentUser.userCourses.length > 0 && (
            <NavLink
              to={`/mycourses&user=${currentUser.userLogin}`}
              activeClassName="active-item"
              className="nav-item"
            >
              MyCourses
            </NavLink>
          )}
        </div>
        {isLogged ? (
          <NavLink
            to="/dashboard"
            className="nav-auth-btn"
            activeClassName="active-auth"
          >
            <div className="nav-img">
              <img
                className="nav-avatar"
                alt="userAvatar"
                src={currentUser.userAvatar}
              ></img>
            </div>
            {`Welcome, ${currentUser.userName}!`}
          </NavLink>
        ) : (
          <NavLink
            to="/auth/login"
            className="nav-auth"
            activeClassName="active-auth"
          >
            <img
              src={auth}
              width="30px"
              height="30px"
              className="auth-img"
              alt="login icon"
            ></img>
            <button className="nav-auth-btn">Login</button>
          </NavLink>
        )}
      </header>

      <main className="main">
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/auth/login">
            {isLogged ? <Redirect to="/dashboard" /> : <Login />}
          </Route>
          <Route exact path="/auth/registration">
            {isLogged ? <Redirect to="/dashboard" /> : <Registration />}
          </Route>
          <Route exact path="/home">
            {/* <Home /> */}
          </Route>
          <Route exact path="/mycourses&user=:login">
            {isLogged ? <MyCourses /> : <Redirect to="/auth/login" />}
          </Route>
          <Route exact path="/courses">
            <Courses />
          </Route>
          <Route exact path="/dashboard">
            {isLogged ? <Dashboard /> : <Redirect to="/auth/login" />}
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default Nav;
