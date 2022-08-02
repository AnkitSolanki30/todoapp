import { createSlice } from "@reduxjs/toolkit";

const initialLoginState = {
    entities: null,
    singleEntity: null,
};

const loginSlice = createSlice({
    name: "loginCredentials",
    initialState: initialLoginState,
    reducers: {
        // Set Token
        setToken: (state, actions) => {
            const { token } = actions.payload;
            state.singleEntity = token;
        },

        setUser: (state, actions) => {
            const { user } = actions.payload;
            state.singleEntity = user;
        },
    }
})

export default loginSlice;