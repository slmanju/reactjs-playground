const LIKE = "likes/like";

const like = () => {
  return { type: LIKE };
};

const initialState = {
  likes: 0,
};

const likesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE: {
      return {
        ...state,
        likes: state.likes + 1,
      };
    }
    default:
      return state;
  }
};

export { like, likesReducer };
