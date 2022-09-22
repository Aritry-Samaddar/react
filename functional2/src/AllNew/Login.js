import { useState } from "react"
export default function Login() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const onSubmit=(username,password)=>{
        setUsername(username)
        setPassword(password)
    }
    if(!username&&!password) {
        return <Form onSubmit={onSubmit}></Form>
    }
    return(
        <div>
            <p>Username : {username}</p>
            <p>Password : {password}</p>
        </div>
    )
}
function Form({onSubmit}) {
    const [u,setU]=useState('')
    const [p,setP]=useState('')
    const handle=(e)=>{
        e.preventDefault()
        onSubmit(u,p)
    }
    const set=(e,v)=>{
        if(v==='u') setU(e.target.value)
        if(v==='p') setP(e.target.value)
    }
    return (
        <div>
          <form>
            <input type="text" placeholder="Username" onChange={(e)=>set(e,'u')} value={u} />
            <input type="password" placeholder="Password" onChange={(e)=>set(e,'p')} value={p} />
            <button onClick={(e)=>handle(e)} disabled={u&&p?false:true}>Submit</button>
          </form>
        </div>
    )
}