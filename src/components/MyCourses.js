import React from "react";
import { useSelector } from "react-redux";
import MyCourse from "./MyCourse";

function MyCourses() {
  const currentUser = useSelector((state) => state.userData.currentUser);
  const courses = useSelector((state) => state.courses.courses);

  return (
    <div className="mycourses">
      {courses
        .filter((course) => {
          for (let i = 0; i < currentUser.userCourses.length; i++) {
            if (course.id === currentUser.userCourses[i]) {
              return true;
            }
          }
          return false;
        })
        .map((course) => (
          <MyCourse course={course} key={course.id} />
        ))}
    </div>
  );
}

export default MyCourses;
