import React from "react"
import './CloseTicket.css'
class CloseTicket extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            result:this.props.data
        }
    }
    render() {
        const {data}=this.props
      return (
        <div className="row" style={{margin: '10px'}}>
            {
            data.map((item)=>(
                <div className="col-sm-12 col-lg-3">
                    <div className="card k1" style={{margin: '5px', backgroundColor: '#dddddd', boxShadow: '-4px 2px 2px 2px #dcdde1'}}>
                        <div className="card-body" style={{backgroundColor: `${item.bg}`}}>
                            <h3 className="card-text"><b></b>{item.description}</h3>
                            <p className="card-title">{item.timeStamp}</p>
                            <p className="card-text"><b>Ticket ID: </b>{item.id}</p>
                            <p className="card-text"><b>Summary: </b>{item.summary}</p>
                        </div>
                    </div>
                </div>
            ))
          }
        </div>
      )
    }
}
export default CloseTicket