import React from 'react';
class PureCompoEg extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state={
          count:0
        }
    }
    increment=()=>{
      this.setState({count:1})
    }
    render() {
      console.log("inside render")
      return (
        <div>
          <h1>LifeCycleMethods</h1>
          <h2>No of times rendered: {this.state.count}</h2>
          <button onClick={this.increment}>Update</button>
        </div>
      )
    }
}
export default PureCompoEg