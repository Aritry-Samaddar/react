import React from "react";
import Header from "./Header";
import Response from './Response'
import TableData from "./TableData";
class LeaderBoard extends React.Component {
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        this.setState({data:Response.list})
    }
    render() {
      return (
        <div className="bgColor">
            <Header></Header>
          <h2 style={{textAlign: 'center'}}>Leaderboard</h2>
          <TableData tabledata={this.state.data}></TableData>
        </div>
      )
    }
}
export default LeaderBoard