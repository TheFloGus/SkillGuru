import "./style/main.scss";
import React, { useEffect } from "react";
import Wrap from "./components/Wrap";
import { setLocalCourses } from "./components/slices/CoursesSlice";
import { setLocalUserData } from "./components/slices/UserDataSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setLocalCourses());
    dispatch(setLocalUserData());
  }, [dispatch]);

  return (
    <div className="wrap">
      <Wrap />
    </div>
  );
}

export default App;
