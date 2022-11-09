import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        updateuser: (state, action) => {
            state.user = action.payload
        },
        removeuser: (state, action) => {
            state.user = null
        }
    }
})

export const { updateuser, removeuser } = authSlice.actions
export const SelectUser = (state) => state.auth.user

export default authSlice.reducer