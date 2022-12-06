import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../../api/url";

const getCities = createAsyncThunk("getCities", async () => {
  try {
    const res = await axios.get(`${URL}/cities`);
    return {
      cities: res.data.response,
    };
  } catch (err) {
    return {
      error: "Error",
    };
  }
});

const getFilteredCities = createAsyncThunk(
  "getFilteredCities",
  async (filter) => {
    try {
      let searchQuery = filter.name;
      let checkQuery = filter.continent.join(",");
      const res = await axios.get(
        `${URL}/cities?name=${searchQuery}&continent=${checkQuery}`
      );

      return {
        cities: res.data.response,
      };
    } catch (error) {
      return {
        error: "Error",
      };
    }
  }
);

const cityAction = {
  getCities,
  getFilteredCities,
};

export default cityAction;