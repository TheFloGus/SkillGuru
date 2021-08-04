import React from "react";
import { useState } from "react";
import AdminButtons from "./AdminButtons";
import { useSelector, useDispatch } from "react-redux";
import { addUserCourse, setCurrentUser } from "./slices/UserDataSlice";
import { useHistory } from "react-router-dom";

function CourseItem({ item, index }) {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [description, setDescription] = useState("");
  const isLogged = useSelector((state) => state.userData.isLoggedIn);
  const currentUser = useSelector((state) => state.userData.currentUser);
  const courses = useSelector((state) => state.courses.courses);
  const history = useHistory();
  const dispatch = useDispatch();

  function getHandler() {
    dispatch(
      addUserCourse({ courseId: courses[index].id, index: currentUser.index })
    );
    dispatch(setCurrentUser(currentUser.index));
  }

  return (
    <li
      className={"course-item " + (open ? " open" : "")}
      onClick={() => setOpen(true)}
      style={{ backgroundColor: item.color }}
    >
      <div className="course-text">
        <h3 className="course-title">{item.name}</h3>
        <p className={"course-technologies" + (open ? " open-tech" : "")}>
          Languages:
          {item.technologies.map((technique, number) => (
            <span
              className={"course-technique" + (open ? " open-tech" : "")}
              key={number}
            >
              {technique + ","}
            </span>
          ))}
        </p>
        {open && <p className="course-description">{item.description}</p>}
      </div>
      <div className="course-image">
        <img
          src={item.logo}
          width="100px"
          height="100px"
          className={"course-logo " + (open ? " open-logo" : "")}
        ></img>
        {open && (
          <div className="course-buttons">
            {isLogged ? (
              currentUser.userCourses.some((course) => course === item.id) ? (
                <p>You already have it</p>
              ) : (
                <button className="course-button green" onClick={getHandler}>
                  Get
                </button>
              )
            ) : (
              <button
                className="course-button green"
                onClick={() => history.push("/auth/login")}
              >
                Login
              </button>
            )}
            {isLogged && currentUser.isAdmin ? <AdminButtons /> : null}
            <button
              className="course-button"
              onClick={(e) => {
                setOpen(false);
                e.stopPropagation();
              }}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </li>
  );
}

export default CourseItem;
