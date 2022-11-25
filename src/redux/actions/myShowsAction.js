import {  createAsyncThunk} from "@reduxjs/toolkit";
import { URL } from "../../api/url";
import axios from "axios";

const deleteShow = createAsyncThunk("deleteShow", async (id) => {
    let url = `${URL}/shows/${id}`;
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
const myShowAction ={
    deleteShow
}

export default myShowAction;