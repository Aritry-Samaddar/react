import { useState } from "react"
import { Prompt, Redirect } from "react-router-dom"
import { useHistory } from "react-router-dom"
import './VFiveComponents.css'
export function HomePage() {
    return(
        <div>
            <Prompt when={true} message={(location)=>`Are you sure you want to redirect to ${location.pathname}`}></Prompt>
            <h1>Home Page</h1>
        </div>
    )
}
export function DashBoard() {
    return(
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}
// useParams
export function Login() {
    const history=useHistory()
    const handleLogin=()=>{
        history.push('/dashboard')
    }
    return(
        <div style={{margin: '10px',display: "flex",flexDirection: 'row'}}>
            <input type='text' className="form-control" style={{width: '200px',marginRight: '10px'}}></input>
            <button onClick={handleLogin} className='y btn btn-outline-success'>Login</button>
        </div>
    )
}