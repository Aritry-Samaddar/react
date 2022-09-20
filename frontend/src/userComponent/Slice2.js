import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.withCredentials=true
export const getProducts=createAsyncThunk('/userComponent/getProducts',async ()=>{
    try{
        const result=await axios.get('http://localhost:3002/getProducts')
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
export const get=createAsyncThunk('/userComponent/get',async ()=>{
    try{
        const result=await axios.get('http://localhost:3002/getUsers')
        return result.data.data
    }
    catch(err){
        console.log(err)
    }
})
const initialValue={
    products:[],
    loading:true
}
const Slice2=createSlice({
    name:"info2",
    initialState:{
        data:initialValue
    },
    reducers:{
        
    },
    extraReducers:{
        [getProducts.pending]:(state,action)=>{
            state.data.loading=true
        },
        [getProducts.fulfilled]:(state,action)=>{
            state.data.loading=false
            state.data.products=action.payload.data
        },
        [getProducts.rejected]:(state,action)=>{
            state.data.loading=true
        }
    }
})
export default Slice2.reducer