import React from "react"
import './OpenTicket.css'
class EachTicket extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            // result:this.props.data,
            // flag:-1,
            // input:''
        }
    }
    // handleChange=(itemid)=>{
    //     this.setState({flag:itemid})
    // }
    // handleInput=(e)=>{
    //     this.setState({input:e.target.value})
    // }
    handleKey=(e,itemid)=>{
        if(e.key==='Enter') {
            this.props.addSummary(this.props.input,itemid)
        }
    }
    render() {
        const {data, addSummary, handleChange, handleInput, flag, input, handleArrow, clr}=this.props
      return (
        <>
        <div className="row" style={{margin: '10px'}}>
            {
            data.map((item)=>(
                <div className="col-sm-12 col-lg-3">
                    <div className="card k1" style={{margin: '5px', backgroundColor: '#dddddd', boxShadow: '-4px 2px 2px 2px #dcdde1'}}>
                        <div className="card-body" style={{backgroundColor: `${clr}`}}>
                            <h3 className="card-text"><b></b>{item.description}</h3>
                            <p className="card-title">{item.timeStamp}</p>
                            <p className="card-text"><b>Ticket ID: </b>{item.id}</p>
                            {
                                flag===item.id ? 
                                <>
                                <i class="x li fa-solid fa-arrow-left-long" onClick={(e)=>handleArrow(e)}></i>
                                <br></br>
                                <input type="text" placeholder="Add Summary" style={{marginRight: '5px',borderRadius: '5px',border: 'solid'}} onChange={(e)=>handleInput(e)} onKeyDown={(e)=>this.handleKey(e,item.id)}></input>
                                <button className="x" style={{borderRadius: '5px',width: '50px',backgroundColor: 'pink',border: 'solid'}} onClick={(e)=>addSummary(input,item.id)}>Close</button>
                                </>
                                 :  <button className="x btn btn-outline-danger" onClick={(e)=>handleChange(item.id)}>Close</button>
                            }
                        </div>
                    </div>
                </div>
            ))
          }
        </div>
        </>
      )
    }
}
export default EachTicket