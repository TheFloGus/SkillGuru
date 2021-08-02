import { createSlice } from "@reduxjs/toolkit";
import avatar from "../img/Avatar.png";

const initialState = {
  users: [
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
	{
		userLogin: "admin",
		userName: "admin",
		userSurname: "admin",
		userPassword: "1234",
		userAvatar: avatar,
		userCourses: [],
		isAdmin: true,
		isTeacher: false,
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
	  },
  ],
  isLoggedIn: false,
  currentUser: {}
};

const userDataSlice = createSlice({
  name: "User Data",
  initialState,
  reducers: {
    toggleLoggedIn: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
    changeUserData: (state, action) => {
      const { index, userKey, newValue } = action.payload;
      state.users[index][userKey] = newValue;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    addUserCourse: (state, action) => {
      state.users.userCourses.push(action.payload);
    },
	setCurrentUser: (state, action) => {
		state.currentUser = action.payload;
	}
  },
});

export default userDataSlice.reducer;

export const { toggleLoggedIn, changeUserData, addUser, addUserCourse, setCurrentUser } = userDataSlice.actions;
