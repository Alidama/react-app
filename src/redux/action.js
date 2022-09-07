import { movies$ } from "../data/movies";
import { getFilm, setError, START } from "./actionType";

const moviesStart = () => {
  return { type: START };
};
const moviesGet = (data) => {
  return { type: getFilm, payload: data };
};
const errorGet = (error) => {
  return { type: setError, payload: error.message };
};
const getMoviesAsync = () => {
    return movies$
}

export const getMoviesWithThunk = () => async (dispatch) => {
  dispatch(moviesStart());
  try {
    const data = await getMoviesAsync()
    dispatch(moviesGet(data));
  } catch (error) {
    dispatch(errorGet(error));
  }
};