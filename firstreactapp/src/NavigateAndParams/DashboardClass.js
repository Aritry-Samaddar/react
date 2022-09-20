import React from "react"
class DashboardClass extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
      return (
        <div>
          <h1>Welcome to your dashboard {this.props.paramsData.userName} !</h1>
        </div>
      )
    }
}
export default DashboardClass