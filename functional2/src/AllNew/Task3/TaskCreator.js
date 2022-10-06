import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "./Action";
const TaskCreator=(props)=>{
    const [name,setName]=useState('')
    const [time,setTime]=useState(0)
    const [flag,setFlag]=useState(false)
    useEffect(()=>{
        if(flag===true) {
            setTimeout(() => {
                setTime(parseInt(time)+1)
            }, 1000);
        }
    },[flag,time])
    const handleChange=(e,val)=>{
        if(val==='n') setName(e.target.value)
        if(val==='t') setTime(e.target.value)
    }
    const start=()=>{
        setFlag(true)
    }
    const stop=(e)=>{
        e.preventDefault()
        if(!name||!time) return alert('Field empty!')
        setFlag(false)
        setName('')
        setTimeout(() => {
            setTime(0)
        }, 1000);
        const obj={name:name,time:parseInt(time)}
        props.addTask(obj)
    }
    return(
        <div>
            {console.log(props.tasks)}
            <label>
                Task Name : 
                <input type='text' onChange={(e)=>handleChange(e,'n')} value={name}></input>
            </label>
            <label>
                Time Elapsed : 
                <input type='number' onChange={(e)=>handleChange(e,'t')} value={time}></input>
            </label>
            <button onClick={start}>Start</button>
            <button onClick={(e)=>stop(e)}>Stop</button>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        tasks:state.tasks
    }
}
export default connect(mapStateToProps,{addTask})(TaskCreator)