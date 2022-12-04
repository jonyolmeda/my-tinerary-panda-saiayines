import {  createAsyncThunk} from "@reduxjs/toolkit";
import { URL } from "../../api/url";
import axios from "axios";

const getItineraries = createAsyncThunk('getItineraries', async(id) => {
  try {
      const res = await axios.get(`${URL}/itinerariesBy?userId=${id}`)
      return {
          itineraries: res.data.response
      }
  } catch (err) {
      return {
          error: 'Error'
      }
  }
})

const deleteItinerary = createAsyncThunk("deleteItinerary", async (id) => {
  try {
    await axios.delete(`${URL}/itineraries/${id}`,{ 
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    return {
      success: true,
    };
    } catch (error) {
      return {
        error: true,
      };
    }
  });
const myItineraryAction ={
    deleteItinerary,
    getItineraries
}

export default myItineraryAction;