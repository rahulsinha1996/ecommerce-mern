import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { server } from '../../server';

// Async thunk to create a new user
export const getUserRequest = createAsyncThunk('user/getUser', async () => {
    const response = await axios.get(`${server}/user/getuser`, { withCredentials: true });
    return response.data;
});

const initialState = {
    isAuthenticated: false,
    user: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState, // Corrected property name
    reducers: {
        // Your other synchronous actions can go here if needed
    },
    extraReducers: (builder) => {
        builder.addCase(getUserRequest.fulfilled, (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        });
    },
});



export default userSlice;
