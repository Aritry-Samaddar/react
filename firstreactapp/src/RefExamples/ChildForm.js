import React from 'react'
class ChildForm extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        // const {fnameRef,passwordRef}=this.props.myRef
        return(
            <div>
                {/* Username:<input type='text' ref={this.props.myref}></input>
                Password:<input type='text'></input> */}
                <form style={{display: 'flex',justifyContent: 'center',gap: '10px'}}>
                    <input type='text' placeholder="Username" ref={this.props.myRef.fnameRef}></input>
                    <input type='text' placeholder="Password" ref={this.props.myRef.passwordRef}></input>
                </form>
            </div>
        )
    }
   
}
export default ChildForm