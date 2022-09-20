import React from 'react';
import Body from '../../others/Body';
class DashboardComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {userName,email,country,pincode,interest} = this.props.data
      return (
        <div>
            <h2>Welcome to your Dashboard {userName}!</h2>
            <h5>
                Email: {email}
                <br></br>Country: {country}
                <br></br>Pincode: {pincode}
                <br></br>Interest: {interest}
            </h5>
            <button onClick={this.props.toggleFunc}>Log Out</button>
            <Body></Body>
        </div>
      )
    }
}
export default DashboardComponent