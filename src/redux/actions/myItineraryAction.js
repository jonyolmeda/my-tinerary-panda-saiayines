import {  createAsyncThunk} from "@reduxjs/toolkit";
import { URL } from "../../api/url";
import axios from "axios";

const deleteItinerary = createAsyncThunk("deleteItinerary", async (id) => {
    let url = `${URL}/itineraries/${id}`;
    try {
      await axios.delete(url);
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
    deleteItinerary
}

export default myItineraryAction;