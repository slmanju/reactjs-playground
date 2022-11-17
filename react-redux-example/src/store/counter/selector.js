import { createSelector } from "reselect";

const selectCounter = (state) => state.counterReducer;
const selectCount = createSelector(selectCounter, (counter) => counter.count);

export { selectCount };
