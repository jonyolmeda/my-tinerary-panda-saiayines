import { createReducer } from "@reduxjs/toolkit";
import reactionActions from "../actions/reactionActions";
const { getMyReactions, deleteMyReactions } = reactionActions;

const initialState = {
  myreactions: [],
  shows: [],
  itineraries: [],
};

const reactionsReducers = createReducer(initialState, (builder) => {
  builder
    .addCase(getMyReactions.fulfilled, (state, action) => {
      return {
        ...state,
        myreactions: action.payload.myreactions,
      };
    })
    .addCase(deleteMyReactions.fulfilled, (state, action) => {
      let reaction = state.myreactions.filter(
        (myreactions) => myreactions._id !== action.payload.myreactions._id
      );
      console.log(reaction);
      return { ...state, myreactions: reaction };
    });
});

export default reactionsReducers;
