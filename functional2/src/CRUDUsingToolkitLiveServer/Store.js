import { configureStore } from "@reduxjs/toolkit"
import Slice from "./Slice"
const store=configureStore({
    reducer:{
        userinfo:Slice
    }
})
export default store