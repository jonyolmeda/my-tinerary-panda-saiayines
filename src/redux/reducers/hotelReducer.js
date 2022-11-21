import { createReducer } from "@reduxjs/toolkit";
import hotelAction from "../actions/hotelAction";

const initialState = {
    hotel:[]
}

const hotelReducer = createReducer(initialState,(hotel)=>{
    hotel.addCase(hotelAction.getHotels.fulfilled,(state,action)=>{
        console.log(action.payload)
        return {...state,hotel:action.payload.hotels}
    })
    hotel.addCase(hotelAction.getHotelsBySearch.fulfilled,(state,action)=>{
        return {...state,hotel:action.payload.hotels}
    })
    hotel.addCase(hotelAction.getHotelCross.fulfilled,(state,action)=>{
        return {...state,hotel:action.payload.hotels}
    })
})

export default hotelReducer