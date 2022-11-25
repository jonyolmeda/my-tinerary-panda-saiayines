import { createReducer } from "@reduxjs/toolkit";
import hotelByUserAction from "../actions/hotelByUserAction";

const initialState = {}

const myHotelsReducer = createReducer(initialState, (myHotel)=>{
    myHotel.addCase(hotelByUserAction.deleteHotels.fulfilled, (state, action)=>{
        return {...state}
    })
} )

export default myHotelsReducer; 