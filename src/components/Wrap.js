import "../style/main.scss";
import React, { Suspense, lazy } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import logo from "./img/logo-fill.png";
import auth from "./img/user.svg";
import { useSelector } from "react-redux";
import { SpinnerInfinity } from "spinners-react";

const Login = lazy(() => import("./Login"));
const Registration = lazy(() => import("./Registration"));
const Courses = lazy(() => import("./Courses"));
const Dashboard = lazy(() => import("./Dashboard"));
const MyCourses = lazy(() => import("./MyCourses"));
const Home = lazy(() => import("./Home"));

function Wrap() {
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
        <Suspense
          fallback={
            <div className="spinner">
              <SpinnerInfinity
                size={61}
                thickness={112}
                speed={100}
                color="rgba(57, 125, 172, 1)"
                secondaryColor="rgba(207, 207, 207, 1)"
              />
            </div>
          }
        >
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
              <Home />
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
        </Suspense>
      </main>
	  <footer className="footer">
		  <p className="footer">2021 Eugene Brednev</p>
	  </footer>
    </>
  );
}

export default Wrap;
