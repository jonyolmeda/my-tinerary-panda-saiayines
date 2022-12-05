import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../../api/url";

let getToken = createAsyncThunk("getToken", async (tokenx) => {
  try {
    let headers = { headers: { Authorization: `Bearer ${tokenx}` } };
    let token = await axios.post(`${URL}/auth/token`, {}, headers);
    let res = token.data.response.user;
    return res;
  } catch (error) {
    console.log(error);
  }
});

const logOut = createAsyncThunk("logOut", async (token) => {
  let url = `${URL}/auth/signout`;
  let headers = { headers: { Authorization: `Bearer ${token}` } };
  console.log(token);
  try {
    let user = await axios.put(url, null, headers);
    console.log(user.data);
    localStorage.clear();
    return {
      success: true,
      response: user.data.message,
    };
  } catch (error) {
    console.log(error.response);
    return {
      success: false,
      response: error.response.data.response,
    };
  }
});

const loginAction = {
  getToken,
  logOut,
};

export default loginAction;