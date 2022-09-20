import React from 'react';
class SignUpComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
      return (
        <div>
            <h2>Please Sign Up to Continue...</h2>
            <button onClick={this.props.toggleFunc}>Sign Up</button>
        </div>
      )
    }
}
export default SignUpComponent