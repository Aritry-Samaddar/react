import { useState } from "react"
import {IoMdArrowDropdown} from 'react-icons/io'
const Dropdown=()=>{
    const [active,setActive]=useState(false)
    const [selected,setSelected]=useState("All Categories")
    const [flag,setFlag]=useState(false)
    const [flag1,setFlag1]=useState(false)
    const [flag2,setFlag2]=useState(false)
    const [flag3,setFlag3]=useState(false)
    const [flag4,setFlag4]=useState(false)
    const [flag5,setFlag5]=useState(false)
    const handleChoose=()=>{
        setActive(!active)
    }
    const handleItem=(e)=>{
        setSelected(e.target.textContent)
        setActive(!active)
        setFlag(false)
        setFlag1(false)
        setFlag2(false)
        setFlag3(false)
        setFlag4(false)
        setFlag5(false)
    }
    const d1={
        width: '250px',
        marginLeft: '50px',
        userSelect: 'none'
    }
    const d2={
        padding: '15px 20px',
        backgroundColor: 'white',
        height: '40px',
        boxShadow: '3px 3px 10px 6px rgba(0, 0, 0, 0.06)',
        fontWeight: 'bold',
        color: '#333',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer'
    }
    const d3={
        padding: '10px',
        backgroundColor: '#fff',
        marginTop: '2px',
        boxShadow: '3px 3px 10px 6px rgba(0, 0, 0, 0.06)',
        fontWeight: '500',
        color: '#333',
        width: '250px'
    }
    const d4={
        padding: '10px',
        cursor: 'pointer',
        transition: 'all 0.2s'
    }
    return(
        <div>
            <div style={d1}>
                <div style={d2} onClick={handleChoose}>{selected} <IoMdArrowDropdown style={{fontSize: '150%'}}/></div>
                {active&&(
                    <div style={d3}>
                        <div onClick={(e)=>handleItem(e)} style={{padding: '10px',cursor: 'pointer',transition: 'all 0.2s',backgroundColor: flag ? '#f4f4f4' : ''}} onMouseEnter={()=>setFlag(true)} onMouseLeave={()=>setFlag(false)}>
                            Office
                        </div>
                        <div onClick={(e)=>handleItem(e)} style={{padding: '10px',cursor: 'pointer',transition: 'all 0.2s',backgroundColor: flag1 ? '#f4f4f4' : ''}} onMouseEnter={()=>setFlag1(true)} onMouseLeave={()=>setFlag1(false)}>
                            Bed Room
                        </div>
                        <div onClick={(e)=>handleItem(e)} style={{padding: '10px',cursor: 'pointer',transition: 'all 0.2s',backgroundColor: flag2 ? '#f4f4f4' : ''}} onMouseEnter={()=>setFlag2(true)} onMouseLeave={()=>setFlag2(false)}>
                            Living Room
                        </div>
                        <div onClick={(e)=>handleItem(e)} style={{padding: '10px',cursor: 'pointer',transition: 'all 0.2s',backgroundColor: flag3 ? '#f4f4f4' : ''}} onMouseEnter={()=>setFlag3(true)} onMouseLeave={()=>setFlag3(false)}>
                            Dining
                        </div>
                        <div onClick={(e)=>handleItem(e)} style={{padding: '10px',cursor: 'pointer',transition: 'all 0.2s',backgroundColor: flag4 ? '#f4f4f4' : ''}} onMouseEnter={()=>setFlag4(true)} onMouseLeave={()=>setFlag4(false)}>
                            Kids
                        </div>
                        <div onClick={(e)=>handleItem(e)} style={{padding: '10px',cursor: 'pointer',transition: 'all 0.2s',backgroundColor: flag5 ? '#f4f4f4' : ''}} onMouseEnter={()=>setFlag5(true)} onMouseLeave={()=>setFlag5(false)}>
                            All Categories
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Dropdown