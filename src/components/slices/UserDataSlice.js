import { createSlice } from "@reduxjs/toolkit";
import avatar from "../img/Avatar.png";

const initialState = {
  users: JSON.parse(localStorage.getItem("users")) || [
    {
      userLogin: "theFloGus",
      userName: "Eugene",
      userSurname: "Brednev",
      userPassword: "1234",
      userAvatar: avatar,
      userCourses: [],
      isAdmin: false,
      isTeacher: false,
	  feedback: 'lorem lorem ipsum dolor sit amet, consectetur'
    },
    {
      userLogin: "admin",
      userName: "admin",
      userSurname: "admin",
      userPassword: "1234",
      userAvatar: avatar,
      userCourses: [],
      isAdmin: true,
      isTeacher: false,
	  feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat'
    },
    {
      userLogin: "Serg",
      userName: "Sergey",
      userSurname: "Teach",
      userPassword: "1234",
      userAvatar: avatar,
      userCourses: [],
      isAdmin: false,
      isTeacher: true,
	  feedback: "<3"
    },
  ],
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || {},
};

const userDataSlice = createSlice({
  name: "User Data",
  initialState,
  reducers: {
    toggleLoggedIn: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
      localStorage.setItem("isLoggedIn", state.isLoggedIn);
    },
    changeUserData: (state, action) => {
      const { index, userKey, newValue } = action.payload;
      state.users[index][userKey] = newValue;
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    addUserCourse: (state, action) => {
      const { index, courseId } = action.payload;
      state.users[index].userCourses.push(courseId);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    setCurrentUser: (state, action) => {
      state.currentUser = {
        ...state.users[action.payload],
        index: action.payload,
      };
      localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
    },
    unsetCurrentUser: (state) => {
      state.currentUser = {};
      localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
    },
    setLocalUserData: (state) => {
      localStorage.setItem("users", JSON.stringify(state.users));
      localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
      localStorage.setItem("isLoggedIn", state.isLoggedIn);
    },
  },
});

export default userDataSlice.reducer;

export const {
  toggleLoggedIn,
  changeUserData,
  addUser,
  addUserCourse,
  setCurrentUser,
  unsetCurrentUser,
  setLocalUserData,
} = userDataSlice.actions;
