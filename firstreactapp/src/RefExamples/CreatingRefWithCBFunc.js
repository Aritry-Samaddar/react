import React from "react";
class CreatingRefWithCBFunc extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loginStatus:false
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        let arg1=this.fnameRef.value
        let arg2=this.passwordRef.value
        this.handleLogin(arg1,arg2)
    }
    handleLogin=(username,password)=>{
        if(username==='admin'&&password==='admin') this.setState({loginStatus:true})
        else return alert("Username/Password is invalid!")
    }
    render() {
      return (
        <div>
            <h1>Ref examples</h1>
            {
                this.state.loginStatus ? <h1>Dashboard</h1> : <>
                <form style={{display: 'flex',justifyContent: 'center',gap: '10px'}} onSubmit={(e)=>this.handleSubmit(e)}>
                    <input type='text' placeholder="Username" ref={(element)=>this.fnameRef=element}></input>
                    <input type='text' placeholder="Password" ref={(e)=>this.passwordRef=e}></input>
                    <input type='submit'></input>
                </form>
                </>
            }
        </div>
      )
    }
}
export default CreatingRefWithCBFunc