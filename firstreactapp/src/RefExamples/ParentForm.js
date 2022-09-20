import React from 'react'
import ChildForm from './ChildForm'
class ParentForm extends React.Component{
    constructor(props){
        super(props)
        this.fnameRef=React.createRef()
        this.passwordRef=React.createRef()
        this.state={
            loginStatus:false
        }
    }
    handleLogin=(e)=>{
        e.preventDefault()
        // console.log(this.usernameref.value)
        if(this.fnameRef.current.value==='admin'&&this.passwordRef.current.value==='admin') this.setState({loginStatus:true})
        else return alert("Username/Password is invalid!")
    }
    render(){
        return(
            <>
            <h1>Ref Examples for Class Components</h1>
            {
                this.state.loginStatus ? <h2>Dashboard</h2> : <>
                <div style={{display: 'flex',justifyContent: 'center',gap: '10px'}}>
                   {/* <ChildForm myref={(element)=>this.usernameref=element}></ChildForm> */}
                   <ChildForm myRef={{fnameRef:this.fnameRef,passwordRef:this.passwordRef}}></ChildForm>
                   <button onClick={(e)=>this.handleLogin(e)}>Login</button>
                </div>
                </>
            }
            </>
        )
    }
   
}
export default ParentForm