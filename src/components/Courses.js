import React, { useState } from "react";
import { useSelector } from "react-redux";
import CourseItem from "./CourseItem";

function Courses() {
  const courses = useSelector((state) => state.courses.courses);
  const [value, setValue] = useState("");
  return (
    <>
      <div className="courses">
        <div className="course-serach">
          <input
            type="text"
            className="course-search-input"
            onChange={(e) => setValue(e.target.value)}
            placeholder="Serach..."
          ></input>
        </div>
        <ul className="course-list">
          {courses
            .filter((course) =>
              course.name.toLowerCase().includes(value.toLowerCase())
            )
            .map((course, index) => {
              return <CourseItem item={course} key={course.id} index={index} />;
            })}
        </ul>
      </div>
    </>
  );
}

export default Courses;
