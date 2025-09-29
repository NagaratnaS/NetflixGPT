import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import movieReducer from "../utils/moviesSlice";
import gptReducer from "../utils/gptSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: gptReducer,
  },
});

export default appStore;
