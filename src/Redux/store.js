import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieSlice";
const store = configureStore({
  reducer: {
    movieStore: movieSlice,
  },
});

export default store;
