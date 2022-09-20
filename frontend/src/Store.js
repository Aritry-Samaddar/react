import { configureStore } from "@reduxjs/toolkit"
import Slice from "./adminComponent/Slice"
import Slice2 from "./userComponent/Slice2"
const Store=configureStore({
    reducer:{
        info:Slice,
        info2:Slice2
    }
})
export default Store