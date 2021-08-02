import { configureStore } from "@reduxjs/toolkit";
import CoursessSlice from "../components/slices/coursessSlice";
import UserDataSlice from "../components/slices/UserDataSlice";

export const store = configureStore({
  reducer: {
    courses: coursessSlice,
    login: loginSlice,
  },
});
