import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteCities = createAsyncThunk("deleteCities", async (id) => {
  let url = `http://localhost:4000/api/cities/${id}`;
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
const cityByUserAction = {
    deleteCities,
};

export default cityByUserAction;