import React from 'react';
import SignUpComponent from './DependentComponents/SignUpComponent';
import SignInComponent from './DependentComponents/SignInComponent';
import DashboardComponent from './DependentComponents/DashboardComponent';
class RootComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            isLoggedIn:true,
            isSignedUp:false,
            userData:{
                userName:"Aritry Samaddar",
                email:"aritry@gmail.com",
                country:"India",
                pincode:123456,
                interest:"React JS"
            }
        }
    }
    toggleUser=()=>{
        this.setState({isLoggedIn:!(this.state.isLoggedIn)})
    }
    toggleUser2=()=>{
        this.setState({isSignedUp:!(this.state.isSignedUp)})
    }
    render() {
      return (
        <div>
          {
            this.state.isSignedUp === false ? <>
            <SignUpComponent toggleFunc={this.toggleUser2}></SignUpComponent>
            </> : this.state.isLoggedIn === true ? <>
            <DashboardComponent data={this.state.userData} toggleFunc={this.toggleUser}></DashboardComponent>
            </> : <>
            <SignInComponent data={this.state.userData} toggleFunc={this.toggleUser}></SignInComponent>
            </>
          }
        </div>
      )
    }
}
export default RootComponent