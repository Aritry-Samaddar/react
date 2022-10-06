import { useState } from "react"
import Test2 from "./test2"
const Test1=()=>{
    const [c,setC]=useState(null)
    const i=()=>{
        setC(c+1)
    }
    return(
        <div>
            <Test2 props={c}></Test2>
            {c}
            <button onClick={i}>+</button>
        </div>
    )
}
export default Test1