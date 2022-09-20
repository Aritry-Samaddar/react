import React from "react";
class StylingWithRef extends React.Component{
    constructor(props){
        super(props)
        this.fnameRef=React.createRef()
        this.passwordRef=React.createRef()
        this.styleRef=React.createRef()
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.fnameRef.current.style.backgroundColor='red'
        this.passwordRef.current.style.backgroundColor='blue'
        this.styleRef.current.style.backgroundColor='violet'
    }
    render() {
      return (
        <div>
            <h1>Ref examples</h1>
            <form style={{display: 'flex',justifyContent: 'center',gap: '10px'}} onSubmit={(e)=>this.handleSubmit(e)}>
                <input type='text' placeholder="Username" ref={this.fnameRef}></input>
                <input type='text' placeholder="Password" ref={this.passwordRef}></input>
                <input type='submit'></input>
            </form>
            <h2 ref={this.styleRef}>Styling</h2>
        </div>
      )
    }
}
export default StylingWithRef