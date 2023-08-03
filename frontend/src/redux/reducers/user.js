// userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { server } from '../../server';


// Async thunk to create a new user
export const getUser = createAsyncThunk('user/getUser', async () => {
    const response = await axios.get(`${server}/user/getuser`,{withCredentials:true});
    return response.data;
});

const initState={
    isAuthenticated:false,
    user:''
}

const userSlice = createSlice({
    name: 'user',
    initState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(getUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default userSlice.reducer;



