import { DECREMENT, INCREMENT } from "./action";
import { initialState } from "./initial-state";

const counterReducer = (state = initialState, { type }) => {
  switch (type) {
    case INCREMENT: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case DECREMENT: {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    default:
      return state;
  }
};

export { counterReducer };
