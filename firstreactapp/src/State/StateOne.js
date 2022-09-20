import React from "react";
import Body from "../others/Body";
class StateOne extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            isLoggedIn:true,
            isSignedUp:false
        }
    }
    toggleUser=()=>{
        this.setState({isLoggedIn:!(this.state.isLoggedIn)})
    }
    toggleUser2=()=>{
        this.setState({isSignedUp:!(this.state.isSignedUp)})
    }
    render() {
        const {data} = this.props
        return(
            <div>
                {
                    // this.state.isLoggedIn ? <>
                    // <h2>Please Sign In to Continue...</h2>
                    // <button onClick={this.toggleUser} style={{marginRight: '10px'}}>Sign In</button>
                    // <button>Sign Out</button>
                    // </> : <>
                    // <h2>Welcome to your Dashboard {data.uname}!</h2>
                    // <button onClick={this.toggleUser}>Log Out</button>
                    // <Body></Body>
                    // </>

                    this.state.isSignedUp === false ? <>
                    <h2>Please Sign Up to Continue...</h2>
                    <button style={{marginRight: '10px'}}>Sign In</button>
                    <button onClick={this.toggleUser2}>Sign Up</button>
                    </> : this.state.isLoggedIn === true ? <>
                    <h2>Welcome to your Dashboard {data.uname}!</h2>
                    <button onClick={this.toggleUser}>Log Out</button>
                    <Body></Body>
                    </> : <>
                    <h2>Please Sign In to Continue...</h2>
                    <button onClick={this.toggleUser} style={{marginRight: '10px'}}>Sign In</button>
                    <button>Sign Up</button>
                    </>
                }
            </div>
        )
    }
}
export default StateOne