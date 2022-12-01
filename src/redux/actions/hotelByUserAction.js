import {  createAsyncThunk} from "@reduxjs/toolkit";
import { URL } from "../../api/url";
import axios from "axios";

const deleteHotels = createAsyncThunk("deleteHotels", async (id) => {
      try {
      await axios.delete(`${URL}/hotels/${id}`,{ 
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return {
        success: true,
      };
    } catch (error) {
      return {
        error: true,
      };
    }
  });
const hotelByUserAction ={
    deleteHotels
}

export default hotelByUserAction;