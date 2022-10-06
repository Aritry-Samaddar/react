import { memo } from "react"
const Test2=({props})=>{
    return(
        <div>
            {console.log("renders")}
            hello{props}
        </div>
    )
}
export default memo(Test2)