import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../../api/url";

let getHotels = createAsyncThunk('getHotels',async()=>{
    let data = await axios.get(`${URL}/hotels`)
    return{
        hotels:data.data.response
    }
})

let getHotelsBySearch= createAsyncThunk('getHotelsByName',async(name)=>{
    let data = await axios.get(`${URL}/hotels?name=${name}`)
    return{
        hotels:data.data.response
    }
    
})

let getHotelCross = createAsyncThunk('getHotelByFilter',async(filter)=>{
    let data = await axios.get(`${URL}/hotels?name=${filter.name}&order=${filter.order}`)
    return{
        hotels:data.data.response
    }
})

const hotelAction = {
    getHotels,
    getHotelsBySearch,
    getHotelCross
}

export default hotelAction