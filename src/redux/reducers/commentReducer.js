import { createReducer } from "@reduxjs/toolkit";
import commentAction from "../actions/commentsAction";

const initialState = {};

const commentReducer = createReducer(initialState, (comment) => {
comment.addCase(commentAction.getCommentss.fulfilled, (state, action) => {
    console.log(action.payload);
    return { ...state, ...action.payload };
});
});
export default commentReducer;