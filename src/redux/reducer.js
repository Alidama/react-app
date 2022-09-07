const initialState = {
  movies: [],
  likes: [],
  disLikes: [],
  loading: false,
  error: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "START":
      return {
        ...state,
        loading: true,
      };
    case "GET-FILM": {
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    }

    case "SET-ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "ADD-LIKE": {
      if (state.likes.includes(action.payload)) {
        return {
          ...state,
          likes: state.likes.filter((item) => item !== action.payload),
        };
      }
      if (
        state.disLikes.includes(action.payload) &&
        !state.likes.includes(action.payload)
      ) {
        return {
          ...state,
          likes: [...state.likes, action.payload],
          disLikes: state.disLikes.filter((item) => item !== action.payload),
        };
      }
      if (
        !state.disLikes.includes(action.payload) &&
        !state.likes.includes(action.payload)
      ) {
        return {
          ...state,
          likes: [...state.likes, action.payload],
        };
      }
    }
    case "ADD-DISLIKE": {
      if (state.disLikes.includes(action.payload)) {
        return {
          ...state,
          disLikes: state.disLikes.filter((item) => item !== action.payload),
        };
      }
      if (
        !state.disLikes.includes(action.payload) &&
        state.likes.includes(action.payload)
      ) {
        return {
          ...state,
          disLikes: [...state.disLikes, action.payload],
          likes: state.likes.filter((item) => item !== action.payload),
        };
      }
      if (
        !state.disLikes.includes(action.payload) &&
        !state.likes.includes(action.payload)
      ) {
        return {
          ...state,
          disLikes: [...state.disLikes, action.payload],
        };
      }
    }
    case "DELETE-MOVIE":
      return {
        ...state,
        movies: state.movies.filter((mv) => mv.id !== action.payload),
      };

    default:
      return state;
  }
};
export default reducer;
