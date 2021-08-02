import "./App.scss";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import logo from "./components/img/logo-fill.png";
import auth from './components/img/user.svg'
import Login from './components/Login'

function App() {
  return (
    <div className="wrap">
      <header className="nav-bar">
        
        <div className="nav-menu">
		<div className="nav-logo">
          <NavLink to="/home">
            <img src={logo} width="120px" height="120px" alt="SkillGuru logo"></img>
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
        </div>
			<NavLink to="/auth" className="nav-auth" activeClassName="active-auth">
				<img src= {auth} width="40px" height = "40px" className='auth-img'></img>
				<button className="nav-auth-btn">
					Login
				</button>
			</NavLink>
      </header>

      <main className="main">
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/auth">
            <Login />
          </Route>
          <Route exact path="/home">
            {/* <Home /> */}
          </Route>
          <Route exact path="/posts/postId:postId">
            {/* <SepPost /> */}
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;