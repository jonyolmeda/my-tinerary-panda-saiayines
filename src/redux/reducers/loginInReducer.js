import { createReducer } from "@reduxjs/toolkit"
import loginAction from "../actions/loginForm"
const initialState = {
    token: "",
}

const loginInReducer = createReducer(initialState, (login) => {
    login.addCase(loginAction.getToken.fulfilled, function (state, action) {
        console.log(action.payload)
            return {token: action.payload}
        })
     
        login.addCase(loginAction.logOut.fulfilled, (state, action) => {
            const { success } = action.payload;
            if (success) {
              return { token: "" };
            }
        })
    })
export default loginInReducer