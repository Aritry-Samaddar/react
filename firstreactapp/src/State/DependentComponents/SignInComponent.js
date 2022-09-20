import React from 'react';
class SignInComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
      return (
        <div>
            <h2>Please Sign In to Continue...</h2>
            <form>
                User Name: <input type='text' style={{marginRight: '10px'}}></input>
                Password: <input type='text' style={{marginRight: '10px'}}></input>
                <button onClick={this.props.toggleFunc}>Sign In</button>
            </form>
        </div>
      )
    }
}
export default SignInComponent