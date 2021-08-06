import { configureStore } from "@reduxjs/toolkit";
import coursesSlice from "../components/slices/CoursesSlice";
import userDataSlice from "../components/slices/UserDataSlice";

export const store = configureStore({
  reducer: {
    courses: coursesSlice,
    userData: userDataSlice,
  },
});