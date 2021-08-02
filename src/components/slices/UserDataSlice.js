import { createSlice } from "@reduxjs/toolkit";
import avatar from "../img/Avatar.png";

const initialState = {
  UserData: [
    {
      userLogin: "theFloGus",
      userName: "Eugene",
      userSurname: "Brednev",
      userPassword: "1234",
      userAvatar: avatar,
      userCourses: [],
      isAdmin: false,
      isTeacher: false,
    },
  ],
  isLoggedIn: false,
};

const userDataSlice = createSlice({
  name: "User Data",
  initialState,
  reducers: {
    toggleLoggedIn: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
    changeUserData: (state, action) => {
      const { userKey, newValue } = action.payload;
      state.UserData[userKey] = newValue;
    },
    addUser: (state, action) => {
      state.userData.push(action.payload);
    },
    addUserCourse: (state, action) => {
      state.UserData.userCourses.push(action.payload);
    },
  },
});

export default userDataSlice.reducer;

export const { toggleLoggedIn, changeUserData, addUser, addUserCourse } = userDataSlice.actions;
