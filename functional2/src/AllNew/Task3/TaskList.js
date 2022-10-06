import React from "react";
import { connect } from "react-redux";
const TaskList=(props)=>{
    return(
        <div>
            <ul>
            <p>{props.tasks.reduce((sum,item)=>sum+item.time,0)}</p>
            {
                props.tasks.map((item,index)=>(
                <li>
                    <span style={{margin: '10px'}}>{index+1}</span>
                    <span style={{margin: '10px'}}>{item.name}</span>
                    <span style={{margin: '10px'}}>{item.time}</span>
                </li>
                ))
            }
            </ul>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        tasks:state.tasks
    }
}
export default connect(mapStateToProps)(TaskList)