import React from "react";
import { useState } from "react";
import AdminButtons from "./AdminButtons";
import { useSelector, useDispatch } from "react-redux";
import { addUserCourse, setCurrentUser } from "./slices/UserDataSlice";
import { addNewTechnologyField } from "./slices/CoursesSlice";
import { useHistory } from "react-router-dom";

function CourseItem({ item, index }) {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(item.name);
  const [technologies, setTechnologies] = useState(item.technologies);
  const [description, setDescription] = useState(item.description);
  const isLogged = useSelector((state) => state.userData.isLoggedIn);
  const currentUser = useSelector((state) => state.userData.currentUser);
  const courses = useSelector((state) => state.courses.courses);
  const history = useHistory();
  const dispatch = useDispatch();

  function getHandler(e) {
    e.stopPropagation();
    dispatch(
      addUserCourse({ courseId: courses[index].id, index: currentUser.index })
    );
    dispatch(setCurrentUser(currentUser.index));
    setOpen(false);
    setEdit(false);
  }

  function cancelHandler(e) {
    setEdit(false);
    e.stopPropagation();
    setName(item.name);
    setTechnologies(item.technologies);
    setDescription(item.description);
  }

  function techHandler(e, number) {
    let newArr = [...technologies];
    newArr[number] = e.target.value;
    setTechnologies(newArr);
  }

  return (
    <li
      className={"course-item " + (open ? " open" : "")}
      onClick={() => setOpen(true)}
      style={{ backgroundColor: item.color }}
    >
      <div className="course-text">
        {edit ? (
          <input
            type="text"
            className="course-title-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        ) : (
          <h3 className="course-title">{item.name}</h3>
        )}
        <p className={"course-technologies" + (open ? " open-tech" : "")}>
          Languages:
          {item.technologies.map((technique, number) => {
            if (edit) {
              return (
                <input
                  type="text"
                  className="course-technique-input"
                  value={technologies[number]}
                  onChange={(e) => techHandler(e, number)}
                  key={number}
                ></input>
              );
            } else {
              return (
                <span
                  className={"course-technique" + (open ? " open-tech" : "")}
                  key={number}
                >
                  {number === item.technologies.length - 1
                    ? technique
                    : technique + ","}
                </span>
              );
            }
          })}
          {edit && (
            <button onClick={() => dispatch(addNewTechnologyField(index))}>
              +
            </button>
          )}
        </p>
        {open &&
          (edit ? (
            <textarea
              maxLength="2000"
              className="course-description-input"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          ) : (
            <p className="course-description">{item.description}</p>
          ))}
      </div>
      <div className="course-image">
        <img
          src={item.logo}
          width="100px"
          height="100px"
          className={"course-logo " + (open ? " open-logo" : "")}
          alt="course-logo"
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
            {isLogged && currentUser.isAdmin ? (
              <AdminButtons
                name={name}
                technologies={technologies}
                description={description}
                edit={edit}
                setEdit={setEdit}
                id={item.id}
              />
            ) : null}
            {edit ? (
              <button className="course-button" onClick={cancelHandler}>
                Cancel
              </button>
            ) : (
              <button
                className="course-button"
                onClick={(e) => {
                  setOpen(false);
                  e.stopPropagation();
                }}
              >
                Close
              </button>
            )}
          </div>
        )}
      </div>
    </li>
  );
}

export default CourseItem;
