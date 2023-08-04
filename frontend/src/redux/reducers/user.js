// userSlice.js
import { createSlice } from '@reduxjs/toolkit';
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
    reducers: {
        getUser((state,action)=>{
            
        })

    },
   
});

export default userSlice.reducer;



