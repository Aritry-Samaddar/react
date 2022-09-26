import { useState } from "react"
const Navbar=()=>{
    const [flag,setFlag]=useState(false)
    const [flags,setFlags]=useState(false)
    const [flag2,setFlag2]=useState(false)
    const [flags2,setFlags2]=useState(false)
    const [flag3,setFlag3]=useState(false)
    const [flags3,setFlags3]=useState(false)
    const [flag4,setFlag4]=useState(false)
    const [flags4,setFlags4]=useState(false)
    const [flag5,setFlag5]=useState(false)
    const [flags5,setFlags5]=useState(false)
    const handle=(e)=>{
        e.preventDefault()
        setFlags(true)
        setFlags2(false)
        setFlags3(false)
        setFlags4(false)
        setFlags5(false)
    }
    const handle2=(e)=>{
        e.preventDefault()
        setFlags2(true)
        setFlags(false)
        setFlags3(false)
        setFlags4(false)
        setFlags5(false)
    }
    const handle3=(e)=>{
        e.preventDefault()
        setFlags3(true)
        setFlags(false)
        setFlags2(false)
        setFlags4(false)
        setFlags5(false)
    }
    const handle4=(e)=>{
        e.preventDefault()
        setFlags4(true)
        setFlags(false)
        setFlags2(false)
        setFlags3(false)
        setFlags5(false)
    }
    const handle5=(e)=>{
        e.preventDefault()
        setFlags5(true)
        setFlags(false)
        setFlags2(false)
        setFlags3(false)
        setFlags4(false)
    }
    const navLinkStyles = ({isActive})=>{
        return {
            // fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: 'none',
            color: isActive ? 'black' : '#C06D1F',
            fontSize: isActive ? '13px' : '13px',
            // borderStyle: isActive ? 'solid' : '',
            padding: isActive ? '26px' : '26px',
            // boxShadow: isActive ? '0px 0px 5px 0px #888888' : '',
            // borderRadius: isActive ? '5px' : '',
            borderBottom: isActive ? '3px solid #523A28' : '',
            backgroundColor: isActive ? '#E6E6E6' : ''
        }
    }
    const nav={
        backgroundColor: 'white',
        height: '76px',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'fixed',
        top: '0',
        overflow: 'hidden',
        zIndex: '100',
        boxShadow: '0px 0px 6px 0px #888888'
    }
    const c={
        textDecoration: 'none',color: '#C06D1F',marginLeft: '-300px',padding: '20px',
        backgroundColor: '#E6E6E6',
        borderBottom: '3px solid #523A28'
    }
    const d={
        textDecoration: 'none',color: '#C06D1F',marginLeft: '50px',padding: '20px',
        backgroundColor: '#E6E6E6',
        borderBottom: '3px solid #523A28'
    }
    const f={textDecoration: 'none',color: 'black',marginLeft: '-300px',backgroundColor: flag?'#E6E6E6':'',padding: '20px',borderBottom: flag?'3px solid #523A28':''}
    const g={textDecoration: 'none',color: 'black',marginLeft: '50px',backgroundColor: flag2?'#E6E6E6':'',padding: '20px',borderBottom: flag2?'3px solid #523A28':''}
    const h={textDecoration: 'none',color: 'black',marginLeft: '50px',backgroundColor: flag3?'#E6E6E6':'',padding: '20px',borderBottom: flag3?'3px solid #523A28':''}
    const i={textDecoration: 'none',color: 'black',marginLeft: '50px',backgroundColor: flag4?'#E6E6E6':'',padding: '20px',borderBottom: flag4?'3px solid #523A28':''}
    const j={textDecoration: 'none',color: 'black',marginLeft: '50px',backgroundColor: flag5?'#E6E6E6':'',padding: '20px',borderBottom: flag5?'3px solid #523A28':''}
    return(
        <div>
            {console.log(flags)}
            <div style={nav}>
                <div style={{display: 'flex',flexDirection: 'column',alignItems: 'flex-start',cursor: 'pointer'}}>
                    <div style={{marginLeft: '360px',marginTop: '-5px'}}>
                        <a href="home" style={flags?c:f} onMouseEnter={()=>setFlag(true)} onMouseLeave={()=>setFlag(false)} onClick={(e)=>handle(e)}><b>Home</b></a>
                        <a href='products' style={flags2?d:g} onMouseEnter={()=>setFlag2(true)} onMouseLeave={()=>setFlag2(false)} onClick={(e)=>handle2(e)}><b>Products</b></a>
                        <a href='users' style={flags3?d:h} onMouseEnter={()=>setFlag3(true)} onMouseLeave={()=>setFlag3(false)} onClick={(e)=>handle3(e)}><b>Users</b></a>
                        <a href='sales' style={flags4?d:i} onMouseEnter={()=>setFlag4(true)} onMouseLeave={()=>setFlag4(false)} onClick={(e)=>handle4(e)}><b>Sales Report</b></a>
                        <a href='stocks' style={flags5?d:j} onMouseEnter={()=>setFlag5(true)} onMouseLeave={()=>setFlag5(false)} onClick={(e)=>handle5(e)}><b>Stocks Report</b></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar