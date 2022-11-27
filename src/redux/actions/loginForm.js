import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import  { URL } from "../../api/url";

let getToken= createAsyncThunk('getToken', async(tokenx)=>{
    let headers = {headers:{'Authorization': `Bearer ${tokenx}`}}
    let token = await axios.post(`${URL}/auth/token`, {}, headers)
    let res = token.data.response.user
    return(res)
})

const loginAction = {
   getToken
}

export default loginAction