import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../../api/url";

const deleteCities = createAsyncThunk("deleteCities", async (id) => {
  try {
  await axios.delete(`${URL}/cities/${id}`,{ 
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
const cityByUserAction = {
    deleteCities,
};

export default cityByUserAction;