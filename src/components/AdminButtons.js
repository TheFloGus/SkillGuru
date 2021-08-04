import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCourseData, deleteCourse } from "./slices/CoursesSlice";

function AdminButtons({ name, technologies, description, edit, setEdit, id }) {
  const courses = useSelector((state) => state.courses.courses);
  const dispatch = useDispatch();
  function confirmHandler() {
    const newCourse = {
      ...courses.find((course) => course.id === id),
      name,
      technologies: technologies.filter(Boolean),
      description,
    };
    dispatch(changeCourseData({ id, newValue: newCourse }));
	setEdit(false)
  }

  return (
    <>
      {edit ? (
        <button className="course-button" onClick={confirmHandler}>
          Confirm
        </button>
      ) : (
        <button className="course-button" onClick={()=>setEdit(true)}>Edit</button>
      )}
      <button className="course-button" onClick={()=>dispatch(deleteCourse(id))}>Delete</button>
    </>
  );
}

export default AdminButtons;
