import React from "react"
import _isEqual from 'lodash/isEqual'
class PendingTask extends React.Component {
    constructor(props) {
        super(props)
    }
    shouldComponentUpdate(nextProps) {
        if(_isEqual(nextProps.getPendingTask,this.props.getPendingTask)) return false
        else return true
    }
    render() {
        console.log("pending")
        // const styleBg={
        //     backgroundColor:"aqua"
        // }
        // const borderstyle={
        //     borderStyle:'double',
        //     backgroundColor:'#e04c60'
        // }
        const {getPendingTask,changeCompletionStatus}=this.props
      return (
            <div>
                <h2 className="card-title" style={{textAlign: 'center'}}>Pending Tasks</h2>
                {
                    getPendingTask.map((item)=>(
                        <div style={{border: 'solid'}}>
                            <h3 className="card-text">{item.taskname}</h3>
                            <h4 className="card-text">{item.taskdesc}</h4>
                            <button className='btn btn-outline-success' style={{margin: '5px'}} onClick={(e)=>changeCompletionStatus(item.id)}>Mark Completed</button>
                        </div>
                    ))
                }
            </div>
      )
    }
}
export default PendingTask