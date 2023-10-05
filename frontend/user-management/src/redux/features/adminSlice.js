import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    _id:'',
    name:'',
    img:''
}

export const adminSlice = createSlice({
    name: 'adminAuth',
    initialState,
    reducers:{
        adminLogin : (state,action)=>{
            
            state._id = action.payload._id;
           state.name = action.payload.name;
           state.img = action.payload.img;
           
        }
    }
})
           
       
    
     
            
            

export const {adminLogin} = adminSlice.actions
export default adminSlice.reducer