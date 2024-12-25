import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            // so while calling this dispatch func we pass the action with new data and we will return that
            return action.payload;
        },
        removeUser: (state, action) => {
            return null;
        }
    }
});


export const {addUser, removeUser} = userSlice.actions;

export default userSlice.reducer;