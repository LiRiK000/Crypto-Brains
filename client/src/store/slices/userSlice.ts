import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    token: null,
    id: null,
    emailVerified: null,
}; // initial state


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            state.emailVerified = action.payload.emailVerified;
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
            state.emailVerified = null;
            const isAuth = false;
        },
    }
});


export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;