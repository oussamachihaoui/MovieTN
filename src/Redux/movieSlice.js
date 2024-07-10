import { createSlice } from "@reduxjs/toolkit";
import moviesDB from "../../public/movieData";

const movieSlice = createSlice({
  name: "movies",
  initialState: { moviesData: moviesDB },
  reducers: {
    addMovieAction: (state, action) => {
      state.moviesData = [...state.moviesData, action.payload];
    },
    deleteMovieAction: (state, action) => {
      state.moviesData = state.moviesData.filter(
        (el) => el.id !== action.payload
      );
    },
    updateMovie: (state, action) => {
      state.moviesData = state.moviesData.map((movie) =>
        movie.id === action.payload.id
          ? (movie = action.payload.updateMovie)
          : movie
      );
    },
  },
});

export default movieSlice.reducer;
export const { addMovieAction, deleteMovieAction, updateMovie } =
  movieSlice.actions;
