import {  createAsyncThunk} from "@reduxjs/toolkit";
import { URL } from "../../api/url";
import axios from "axios";

const deleteShow = createAsyncThunk("deleteShow", async (id) => {

    try {
      await axios.delete(`${URL}/shows/${id}`,{ 
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
const myShowAction ={
    deleteShow
}

export default myShowAction;