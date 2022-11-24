import { createReducer } from "@reduxjs/toolkit";
import myShowAction from "../actions/myShowsAction";

const initialState = {}

const myShowReduce = createReducer(initialState, (myHotel)=>{
    myHotel.addCase(myShowAction.deleteShow.fulfilled, (state, action)=>{
        return {...state}
    })
} )

export default myShowReduce; 