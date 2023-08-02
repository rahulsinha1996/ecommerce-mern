import { createReducer } from "@reduxjs/toolkit";

const initState={
    isAuthenticated:false,

};


export const userReducer=createReducer(initState,{
    LoadUserRequest:(state)=>{
        state.loading=true;

    },
    LoadUserSuccess:(state,action)=>{
        state.isAuthenticated=true;
        state.loading=false;
        state.user=action.payload;
    },
    LoadUserFailed:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
        state.isAuthenticated=false;
    },
    clearErrors:(state)=>{
        state.error=null;
    }

})
