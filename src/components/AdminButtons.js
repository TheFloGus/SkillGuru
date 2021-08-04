import React from "react";
import { useSelector } from "react-redux";

function AdminButtons(){
	return (
		<>
		<button className="course-button">Edit</button>
		<button className="course-button">Delete</button>
		</>
	)
}

export default AdminButtons;