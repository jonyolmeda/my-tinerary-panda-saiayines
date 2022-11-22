import { createReducer } from "@reduxjs/toolkit";
import cityByUserAction from "../actions/cityByUserAction";

const initialState = {}

const myCitiesReducer = createReducer(initialState, (myCity)=>{
    myCity.addCase(cityByUserAction.deleteCities.fulfilled, (state, action)=>{
        return {...state}
    })
} )

export default myCitiesReducer; 