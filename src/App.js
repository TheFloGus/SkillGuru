import "./style/main.scss";
import React, { useEffect } from "react";
import Nav from "./components/Nav";
import { setLocalCourses } from "./components/slices/CoursesSlice";
import { setLocalUserData } from "./components/slices/UserDataSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setLocalCourses());
    dispatch(setLocalUserData());
  }, []);

  return (
    <div className="wrap">
      <Nav />
    </div>
  );
}

export default App;
