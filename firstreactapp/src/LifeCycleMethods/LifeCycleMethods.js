import React from 'react';
class LifeCycleMethods extends React.Component {
    constructor(props) {
        super(props)
        this.state={
          msg:"",
          count:0
        }
    }
    static getDerivedStateFromProps(props, state) {
      console.log("inside DS",props,state)
      return {msg:props.initialMsg}
    }
    // componentDidMount() {
    //   console.log("did mount")
    //   this.setState({count:this.state.count + 1})
    // }
    // getUserDetrails() {
    //   // fetch data using json-server
    // }
    shouldComponentUpdate(newProps,newState) {
      if(this.state.count === newState.count) {
        return false
      } else {
        return true
      }
    }
    increment=()=>{
      // this.setState({count:0})
      this.setState({count:this.state.count + 1})
    }
    getSnapshotBeforeUpdate(prevProps,prevState) {
      console.log("SS")
      console.log(prevState)
      return "this from ss"
    }
    componentDidUpdate(prevProps,prevState,snapvalue) {
      console.log("re-render",snapvalue)
      // this.setState({msg:"reached end"})
      // You may call setState() immediately in componentDidUpdate() but note that it must be wrapped in 
      // a condition, or you'll cause an infinite loop. It would also cause an extra re-rendering which, 
      // while not visible to the user, can affect the component performance.
    }
    render() {
      console.log("inside render")
      return (
        <div>
          <h1>LifeCycleMethods</h1>
          <h2>{this.state.msg}</h2>
          <h3>No of times rendered: {this.state.count}</h3>
          <button onClick={this.increment}>Update</button>
        </div>
      )
    }
}
export default LifeCycleMethods