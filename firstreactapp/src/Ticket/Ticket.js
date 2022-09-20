import React from "react"
import OpenTicket from "./OpenTicket"
import CloseTicket from "./CloseTicket"
import { result } from "lodash"
class Ticket extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            result:this.props.data,
            arr:[1,2,3,4,5],
            clr1:'#FABEC0',
            clr2:'#6AABD2',
            clr3:'#94C973',
            clr4:'#FEDA15',
            clr5:'#F89700'
        }
    }
    getOpenedTickets=()=>{
        return this.state.result.filter((item)=>item.status===true)
    }
    getClosedTickets=()=>{
        return this.state.result.filter((item)=>item.status===false)
    }
    handleStatusChange=(itemid)=>{
        let temp=[...this.state.result]
        let obj=temp.find((item)=>item.id===itemid)
        obj.status=!obj.status
        this.setState({result:temp})
    }
    addSummary=(sum,itemid)=>{
        if(sum==='') return alert("Please fill the summary!")
        let temp=[...this.state.result]
        let obj=temp.find((item)=>item.id===itemid)
        obj.summary=sum
        this.setState({result:temp})
        this.handleStatusChange(itemid)
    }
    changeColor=(i,itemid)=>{
      if(i===1) {
        let temp = [...this.state.result]
        let obj=temp.find((item)=>item.id===itemid)
        obj.bg = this.state.clr1
        this.setState({result:temp})
        return this.state.clr1
      }
      if(i===2) {
        let temp = [...this.state.result]
        let obj=temp.find((item)=>item.id===itemid)
        obj.bg = this.state.clr2
        this.setState({result:temp})
        return this.state.clr2
      }
      if(i===3) {
        let temp = [...this.state.result]
        let obj=temp.find((item)=>item.id===itemid)
        obj.bg = this.state.clr3
        this.setState({result:temp})
        return this.state.clr3
      }
      if(i===4) {
        let temp = [...this.state.result]
        let obj=temp.find((item)=>item.id===itemid)
        obj.bg = this.state.clr4
        this.setState({result:temp})
        return this.state.clr4
      }
      if(i===5) {
        let temp = [...this.state.result]
        let obj=temp.find((item)=>item.id===itemid)
        obj.bg = this.state.clr5
        this.setState({result:temp})
        return this.state.clr5
      }
    }
    render() {
      return (
        <div>
          <div>
            <h2 style={{textAlign: 'center',color: 'green'}}>Opened Tickets</h2>
            <OpenTicket data={this.getOpenedTickets()} addSummary={this.addSummary} priority={this.state.arr} changeColor={this.changeColor}></OpenTicket>
          </div>
          <div className="row">
            <h2 style={{textAlign: 'center',color: 'red'}}>Closed Tickets</h2>
            <CloseTicket data={this.getClosedTickets()}></CloseTicket>
          </div>
        </div>
      )
    }
}
export default Ticket