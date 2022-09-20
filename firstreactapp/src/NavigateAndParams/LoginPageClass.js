import React from "react"
import {Link} from 'react-router-dom'
import './LoginPageClass.css'
class LoginPageClass extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            userName:''
        }
    }
    handleChange=(e)=>{
        this.setState({userName:e.target.value})
    }
    handleLogin=(e)=>{
        e.preventDefault()
        this.props.navigate(`/dashboard/${this.state.userName}`)
    }
    render() {
      return (
        <div>
            <form className="fd" style={{marginLeft: '400px',marginTop: '100px'}}>
                <input className="form-control" style={{marginRight: '5px',width: '200px'}} type='text' onChange={(e)=>this.handleChange(e)} placeholder='Username'></input>
                <input className="form-control" type='text' style={{marginRight: '5px',width: '200px'}} placeholder='Password'></input>
                <button className="btn btn-outline-success" onClick={(e)=>this.handleLogin(e)}>Login</button>
            </form>
        </div>
      )
    }
}
export default LoginPageClass