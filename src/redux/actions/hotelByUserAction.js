import {  createAsyncThunk} from "@reduxjs/toolkit";
import { URL } from "../../api/url";
import axios from "axios";

const deleteHotels = createAsyncThunk("deleteHotels", async (id) => {
    let url = `${URL}/hotels/${id}`;
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
const hotelByUserAction ={
    deleteHotels
}

export default hotelByUserAction;