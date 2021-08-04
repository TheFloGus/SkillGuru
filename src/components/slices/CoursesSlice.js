import { createSlice } from "@reduxjs/toolkit";
import frontEndLogo from "../img/Front-end.svg";
import backEndLogo from "../img/Back-end.svg";
import UILogo from "../img/UI.svg";
import pythonLogo from "../img/Python.svg";

const initialState = {
  courses: [
    {
      name: "Front-end",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Faucibus purus in massa tempor. Elit pellentesque habitant morbi tristique. Sed risus pretium quam vulputate dignissim suspendisse. Integer vitae justo eget magna fermentum iaculis eu non. Vitae auctor eu augue ut lectus. Sagittis eu volutpat odio facilisis mauris sit amet. Lobortis elementum nibh tellus molestie nunc non blandit massa. Nibh praesent tristique magna sit amet purus gravida quis blandit. Ipsum dolor sit amet consectetur adipiscing elit. Porta lorem mollis aliquam ut porttitor leo. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend",
      technologies: ["javascript", "html", "css", "react"],
      teachers: ["theFloGus"],
      logo: frontEndLogo,
      color: "#AED8FF",
      id: 1234,
    },
    {
      name: "Back-end",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Faucibus purus in massa tempor. Elit pellentesque habitant morbi tristique. Sed risus pretium quam vulputate dignissim suspendisse. Integer vitae justo eget magna fermentum iaculis eu non. Vitae auctor eu augue ut lectus. Sagittis eu volutpat odio facilisis mauris sit amet. Lobortis elementum nibh tellus molestie nunc non blandit massa. Nibh praesent tristique magna sit amet purus gravida quis blandit. Ipsum dolor sit amet consectetur adipiscing elit. Porta lorem mollis aliquam ut porttitor leo. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend",
      technologies: ["Java", "Python", "C++"],
      teachers: ["theFloGus"],
      logo: backEndLogo,
      color: "#A0ECCF",
      id: 1324,
    },
    {
      name: "Ux/Ui",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Faucibus purus in massa tempor. Elit pellentesque habitant morbi tristique. Sed risus pretium quam vulputate dignissim suspendisse. Integer vitae justo eget magna fermentum iaculis eu non. Vitae auctor eu augue ut lectus. Sagittis eu volutpat odio facilisis mauris sit amet. Lobortis elementum nibh tellus molestie nunc non blandit massa. Nibh praesent tristique magna sit amet purus gravida quis blandit. Ipsum dolor sit amet consectetur adipiscing elit. Porta lorem mollis aliquam ut porttitor leo. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend",
      technologies: ["Figma", "AI"],
      teachers: ["theFloGus"],
      logo: UILogo,
      color: "#F2B7D3",
      id: 3214,
    },
    {
      name: "Python",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Faucibus purus in massa tempor. Elit pellentesque habitant morbi tristique. Sed risus pretium quam vulputate dignissim suspendisse. Integer vitae justo eget magna fermentum iaculis eu non. Vitae auctor eu augue ut lectus. Sagittis eu volutpat odio facilisis mauris sit amet. Lobortis elementum nibh tellus molestie nunc non blandit massa. Nibh praesent tristique magna sit amet purus gravida quis blandit. Ipsum dolor sit amet consectetur adipiscing elit. Porta lorem mollis aliquam ut porttitor leo. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend",
      technologies: ["Python"],
      teachers: ["theFloGus"],
      logo: pythonLogo,
      color: "#FBB028",
      id: 3124,
    },
  ],
};

const coursesSlice = createSlice({
  name: "Courses",
  initialState,
  reducers: {
    changeCourseData: (state, action) => {
      const { index, courseKey, newValue } = action.payload;
      state.courses[index][courseKey] = newValue;
    },
    addCourse: (state, action) => {
      state.courses.push(action.payload);
    },
    deleteCourse: (state, action) => {
      state.courses.splice(action.payload, 1);
    }
  },
});

export default coursesSlice.reducer;

export const { changeCourseData, addCourse, deleteCourse } =
  coursesSlice.actions;
