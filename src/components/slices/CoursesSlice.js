import { createSlice } from "@reduxjs/toolkit";
import frontEndLogo from "../img/Front-end.svg";
import backEndLogo from "../img/Back-end.svg";
import UILogo from "../img/UI.svg";
import pythonLogo from "../img/Python.svg";
import { v4 as uuid } from "uuid";

const initialState = {
  courses: JSON.parse(localStorage.getItem("courses")) || [
    {
      name: "Front-end",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Faucibus purus in massa tempor. Elit pellentesque habitant morbi tristique. Sed risus pretium quam vulputate dignissim suspendisse. Integer vitae justo eget magna fermentum iaculis eu non. Vitae auctor eu augue ut lectus. Sagittis eu volutpat odio facilisis mauris sit amet. Lobortis elementum nibh tellus molestie nunc non blandit massa. Nibh praesent tristique magna sit amet purus gravida quis blandit. Ipsum dolor sit amet consectetur adipiscing elit. Porta lorem mollis aliquam ut porttitor leo. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend",
      technologies: ["javascript", "html", "css", "react"],
      teachers: ["theFloGus"],
      logo: frontEndLogo,
      color: "#AED8FF",
      id: uuid(),
      playlist: "PLM6XATa8CAG4F9nAIYNS5oAiPotxwLFIr",
    },
    {
      name: "Back-end",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Faucibus purus in massa tempor. Elit pellentesque habitant morbi tristique. Sed risus pretium quam vulputate dignissim suspendisse. Integer vitae justo eget magna fermentum iaculis eu non. Vitae auctor eu augue ut lectus. Sagittis eu volutpat odio facilisis mauris sit amet. Lobortis elementum nibh tellus molestie nunc non blandit massa. Nibh praesent tristique magna sit amet purus gravida quis blandit. Ipsum dolor sit amet consectetur adipiscing elit. Porta lorem mollis aliquam ut porttitor leo. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend",
      technologies: ["Java", "Python", "C++"],
      teachers: ["theFloGus"],
      logo: backEndLogo,
      color: "#A0ECCF",
      id: uuid(),
      playlist: "PL_z4rXo1im3rLSy_0pph435-VytTbhgUe",
    },
    {
      name: "Ux/Ui",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Faucibus purus in massa tempor. Elit pellentesque habitant morbi tristique. Sed risus pretium quam vulputate dignissim suspendisse. Integer vitae justo eget magna fermentum iaculis eu non. Vitae auctor eu augue ut lectus. Sagittis eu volutpat odio facilisis mauris sit amet. Lobortis elementum nibh tellus molestie nunc non blandit massa. Nibh praesent tristique magna sit amet purus gravida quis blandit. Ipsum dolor sit amet consectetur adipiscing elit. Porta lorem mollis aliquam ut porttitor leo. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend",
      technologies: ["Figma", "AI"],
      teachers: ["theFloGus"],
      logo: UILogo,
      color: "#F2B7D3",
      id: uuid(),
      playlist: "PL4D4ciWjcTFy59b1tXBAjhnNYP4fLoyVc",
    },
    {
      name: "Python",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Faucibus purus in massa tempor. Elit pellentesque habitant morbi tristique. Sed risus pretium quam vulputate dignissim suspendisse. Integer vitae justo eget magna fermentum iaculis eu non. Vitae auctor eu augue ut lectus. Sagittis eu volutpat odio facilisis mauris sit amet. Lobortis elementum nibh tellus molestie nunc non blandit massa. Nibh praesent tristique magna sit amet purus gravida quis blandit. Ipsum dolor sit amet consectetur adipiscing elit. Porta lorem mollis aliquam ut porttitor leo. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend",
      technologies: ["Python"],
      teachers: ["theFloGus"],
      logo: pythonLogo,
      color: "#FBB028",
      id: uuid(),
      playlist: "PL0lO_mIqDDFXgfuxOEDTCwsWmKezOaDTu",
    },
  ],
};

const coursesSlice = createSlice({
  name: "Courses",
  initialState,
  reducers: {
    changeCourseData: (state, action) => {
      const { id, newValue } = action.payload;
      const index = state.courses.findIndex((course) => course.id === id);
      state.courses[index] = newValue;
      localStorage.setItem("courses", JSON.stringify(state.courses));
    },
    addCourse: (state, action) => {
      state.courses.push(action.payload);
      localStorage.setItem("courses", JSON.stringify(state.courses));
    },
    deleteCourse: (state, action) => {
      const index = state.courses.findIndex(
        (course) => course.id === action.payload
      );
      state.courses.splice(index, 1);
      localStorage.setItem("courses", JSON.stringify(state.courses));
    },
    setLocalCourses: (state) => {
      localStorage.setItem("courses", JSON.stringify(state.courses));
    },
    addNewTechnologyField: (state, action) => {
      state.courses[action.payload].technologies.push("");
      localStorage.setItem("courses", JSON.stringify(state.courses));
    },
  },
});

export default coursesSlice.reducer;

export const {
  changeCourseData,
  addCourse,
  deleteCourse,
  setLocalCourses,
  addNewTechnologyField,
} = coursesSlice.actions;
