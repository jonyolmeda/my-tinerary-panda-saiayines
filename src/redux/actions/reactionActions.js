import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {URL} from '../../api/url'

const createReaction = createAsyncThunk("createReaction", async (data) => {
    let headers = { headers: { 'Authorization': `Bearer ${data.tokenKey}` } }
    try{
        const res = await axios.post(`${URL}/reactions`, data.reaction, headers)
        console.log(res)
        return res.data
    }catch(error){
        return {
            payload: error.response.data,
        }
    }
})

const getReactions = createAsyncThunk("getReactions", async (id) => {
    try{
        const res = await axios.get(`${URL}/reactions?itineraryId=${id}`)
        return res.data
    }catch(error){
        return {
            payload: error.response.data,
        }
    }
})


const updateReaction = createAsyncThunk("updateReaction", async (data) => {
    let headers = { headers: { 'Authorization': `Bearer ${data.tokenKey}` } }
    try{
        const res = await axios.put(`${URL}/reactions?name=${data.name}&itineraryId=${data.id}`, null, headers)
        return res.data
    }catch(error){
        return {
            payload: error.response.data,
        }
    }
})

const reactionActions = {
    createReaction,
    getReactions,
    updateReaction,
}

export default reactionActions