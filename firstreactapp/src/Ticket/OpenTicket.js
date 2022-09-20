import { add, thru } from "lodash"
import React from "react"
import EachTicket from "./EachTicket"
import './OpenTicket.css'
class OpenTicket extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            // result:this.props.data,
            flag:-1,
            input:'',
            clr1:'#FABEC0',
            clr2:'#6AABD2',
            clr3:'#94C973',
            clr4:'#FEDA15',
            clr5:'#F89700'
        }
    }
    handleChange=(itemid)=>{
        this.setState({flag:itemid})
    }
    handleInput=(e)=>{
        this.setState({input:e.target.value})
    }
    handleArrow=(e)=>{
        this.setState({flag:-1})
    }
    handleKey=(e,itemid)=>{
        if(e.key==='Enter') {
            this.props.addSummary(this.state.input,itemid)
        }
    }
    colorPicker=(i)=>{
        if(i===1) return this.state.clr1
        if(i===2) return this.state.clr2
        if(i===3) return this.state.clr3
        if(i===4) return this.state.clr4
        if(i===5) return this.state.clr5
    }
    render() {
        const {data, addSummary, priority, changeColor}=this.props
      return (
        // <><EachTicket data={data.filter((item) => item.priority === 1)} addSummary={addSummary} handleChange={this.handleChange} handleInput={this.handleInput} flag={this.state.flag} input={this.state.input} handleArrow={this.handleArrow} clr={this.state.clr1}></EachTicket>
        // <EachTicket data={data.filter((item) => item.priority === 2)} addSummary={addSummary} handleChange={this.handleChange} handleInput={this.handleInput} flag={this.state.flag} input={this.state.input} handleArrow={this.handleArrow} clr={this.state.clr2}></EachTicket>
        // <EachTicket data={data.filter((item)=>item.priority===3)} addSummary={addSummary} handleChange={this.handleChange} handleInput={this.handleInput} flag={this.state.flag} input={this.state.input} handleArrow={this.handleArrow} clr={this.state.clr3}></EachTicket>
        // <EachTicket data={data.filter((item)=>item.priority===4)} addSummary={addSummary} handleChange={this.handleChange} handleInput={this.handleInput} flag={this.state.flag} input={this.state.input} handleArrow={this.handleArrow} clr={this.state.clr4}></EachTicket>
        // <EachTicket data={data.filter((item)=>item.priority===5)} addSummary={addSummary} handleChange={this.handleChange} handleInput={this.handleInput} flag={this.state.flag} input={this.state.input} handleArrow={this.handleArrow} clr={this.state.clr5}></EachTicket>
        // </>
        // <div className="row" style={{margin: '10px'}}>
        //     {
        //     data.map((item)=>(
        //         <div className="col-sm-12 col-lg-3">
        //             <div className="card k1" style={{margin: '5px', backgroundColor: '#dddddd', boxShadow: '-4px 2px 2px 2px #dcdde1'}}>
        //                 <div className="card-body" style={{backgroundColor: `${item.bg}`}}>
        //                     <h3 className="card-text"><b></b>{item.description}</h3>
        //                     <p className="card-title">{item.timeStamp}</p>
        //                     <p className="card-text"><b>Ticket ID: </b>{item.id}</p>
        //                     {
        //                         this.state.flag===item.id ? 
        //                         <>
        //                         <input type="text" placeholder="Add Summary" style={{marginRight: '5px',borderRadius: '5px',border: 'solid'}} onChange={(e)=>this.handleInput(e)}></input>
        //                         <button style={{borderRadius: '5px',width: '50px',backgroundColor: 'pink',border: 'solid'}} onClick={(e)=>addSummary(this.state.input,item.id)}>Close</button>
        //                         </>
        //                          :  <button className="x btn btn-outline-danger" onClick={(e)=>this.handleChange(item.id)}>Close</button>
        //                     }
        //                 </div>
        //             </div>
        //         </div>
        //     ))
        //   }
        // </div>
        <>
            <div className="row">
                {
                    priority.map((i)=>(
                        data.filter((item)=>item.priority===i).map((item2)=>(
                            <div className="col-sm-12 col-lg-3">
                                <div className="card k1" style={{margin: '5px', backgroundColor: '#dddddd', boxShadow: '-4px 2px 2px 2px #dcdde1'}}>
                        <div className="card-body" style={{backgroundColor: `${this.colorPicker(i)}`}}>
                            <h3 className="card-text"><b></b>{item2.description}</h3>
                            <p className="card-title">{item2.timeStamp}</p>
                            <p className="card-text"><b>Ticket ID: </b>{item2.id}</p>
                            {
                                this.state.flag===item2.id ? 
                                <>
                                <i class="x li fa-solid fa-arrow-left-long" onClick={(e)=>this.handleArrow(e)}></i>
                                <br></br>
                                <input type="text" placeholder="Add Summary" style={{marginRight: '5px',borderRadius: '5px',border: 'solid'}} onChange={(e)=>this.handleInput(e)} onKeyDown={(e)=>this.handleKey(e,item2.id)}></input>
                                <button className="x" style={{borderRadius: '5px',width: '50px',backgroundColor: 'pink',border: 'solid'}} onClick={(e)=>addSummary(this.state.input,item2.id)}>Close</button>
                                </>
                                 :  <button className="x btn btn-outline-danger" onClick={(e)=>this.handleChange(item2.id)}>Close</button>
                            }
                        </div>
                    </div>
                            </div>
                        ))
                    ))
                }
            </div>
        </>
      )
    }
}
export default OpenTicket