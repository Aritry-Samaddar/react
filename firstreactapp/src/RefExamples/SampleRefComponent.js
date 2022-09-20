import React from "react";
class SampleRefComponent extends React.Component{
    constructor(props){
        super(props)
        this.fnameRef=React.createRef()
        this.passwordRef=React.createRef()
        this.state={
            loginStatus:false
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        console.log(this.fnameRef)
        console.log(this.passwordRef)
        let arg1=this.fnameRef.current.value
        let arg2=this.passwordRef.current.value
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
                    <input type='text' placeholder="Username" ref={this.fnameRef}></input>
                    <input type='text' placeholder="Password" ref={this.passwordRef}></input>
                    <input type='submit'></input>
                </form>
                </>
            }
        </div>
      )
    }
}
export default SampleRefComponent