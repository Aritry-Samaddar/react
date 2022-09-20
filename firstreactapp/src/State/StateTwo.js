import React from "react";
import Body from "../others/Body";
import './StateTwo.css'
class StateTwo extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            counter: 0
        }
    }
    changeCountPlus=()=>{
        this.setState({counter:this.state.counter + 1})
    }
    changeCountMinus=()=>{
        this.setState({counter:this.state.counter - 1})
    }
    render() {
      return (
        <div className="c">
          <button onClick={this.changeCountPlus}>Plus</button>
          <h3>{this.state.counter}</h3>
          {
            this.state.counter > 0 ? <button onClick={this.changeCountMinus}>Minus</button> : <button>
              Minus
            </button>
          }
        </div>
      )
    }
}
export default StateTwo