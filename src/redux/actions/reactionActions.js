import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../../api/url";

const createReaction = createAsyncThunk("createReaction", async (data) => {
  let headers = { headers: { Authorization: `Bearer ${data.tokenKey}` } };
  try {
    const res = await axios.post(`${URL}/reactions`, data.reaction, headers);
    console.log(res);
    return res.data;
  } catch (error) {
    return {
      payload: error.response.data,
    };
  }
});

const getReactions = createAsyncThunk("getReactions", async (id) => {
  try {
    const res = await axios.get(`${URL}/reactions?itineraryId=${id}`);
    return res.data;
  } catch (error) {
    return {
      payload: error.response.data,
    };
  }
});

const updateReaction = createAsyncThunk("updateReaction", async (data) => {
  let headers = { headers: { Authorization: `Bearer ${data.tokenKey}` } };
  try {
    const res = await axios.put(
      `${URL}/reactions?name=${data.name}&itineraryId=${data.id}`,
      null,
      headers
    );
    return res.data;
  } catch (error) {
    return {
      payload: error.response.data,
    };
  }
});

const getMyReactions = createAsyncThunk("getMyReactions", async (idUser) => {
  console.log(idUser);
  let url = `${URL}/reactions`;
  try {
    const res = await axios({
      method: "GET",
      url: url,
      params: {
        userId: idUser,
      },
    });
    console.log(res);
    return {
      success: true,
      myreactions: res.data.data,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      reactions: error.response.data.data,
    };
  }
});

const deleteMyReactions = createAsyncThunk(
  "deleteMyActions",
  async ({ idReaction, tokenKey }) => {
    let headers = { headers: { Authorization: `Bearer ${tokenKey}` } };
    let url = `${URL}/reactions/${idReaction}`;
    try {
      const res = await axios.put(url, null, headers);
      console.log(res);
      return {
        success: true,
        myreactions: res.data.response,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        reactions: error.response.data.data,
      };
    }
  }
);

const reactionActions = {
  createReaction,
  getReactions,
  updateReaction,
  getMyReactions,
  deleteMyReactions,
};

export default reactionActions;
