import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    _id:'',
    name:'',
    age:'',
    job:'',
    img:'',
    location:'',
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        userLogin : (state,action)=>{
            
            state._id = action.payload._id;
           state.name = action.payload.name;
           state.age = action.payload.age;
           state.job = action.payload.job;
           state.location = action.payload.location;
           state.img = action.payload.img;
        },
       
        updatePicture:(state,action)=>{
            state.img = action.payload.img;
        }
    }
})
           
     
            
            

export const {userLogin,updatePicture} = authSlice.actions
export default authSlice.reducer