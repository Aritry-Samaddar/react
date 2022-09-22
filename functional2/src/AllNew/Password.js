import { useState } from "react"
const Password=()=>{
    const [pass,setPass]=useState('')
    const [correct,setCorrect]=useState(false)
    const handle=(e)=>{
        setPass(e.target.value)
    }
    const click=(e)=>{
        e.preventDefault()
        if(!pass) return alert('Field empty!')
        else {
            const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)" + "(?=.*[-+_!@#$%^&*., ?]).+$")
            if(!regex.test(pass)) {
                setCorrect(false)
                return alert('Password is not accepted!')
            }
            else {
                setCorrect(true)
                setPass('')
            }
        }
    }
    return(
        <div style={{marginTop: '30px',marginLeft: '30px'}}>
            <input type='password' placeholder="Password" onChange={(e)=>handle(e)} value={pass}></input>
            <button onClick={(e)=>click(e)}>Submit</button>
            {correct&&<p>Password is accepted!</p>}
        </div>
    )
}
export default Password