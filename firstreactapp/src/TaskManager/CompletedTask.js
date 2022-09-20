import React from "react"
class CompletedTask extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log("completed")
        // const styleBg={
        //     backgroundColor:"aqua"
        // }
        // const borderstyle={
        //     borderStyle:'double',
        //     backgroundColor:'#6ecc71'
        // }
        const {getCompletedTask,changeCompletionStatus,changeDeletionStatus}=this.props
      return (
            <div>
                <h2 className="card-title" style={{textAlign: 'center'}}>Completed Tasks</h2>
                {
                    getCompletedTask.map((item)=>(
                        <div style={{border: 'solid'}}>
                            <h3 className="card-text">{item.taskname}</h3>
                            <h4 className="card-text">{item.taskdesc}</h4>
                            <button className='btn btn-outline-danger' style={{margin: '5px',marginRight: '5px'}} onClick={(e)=>changeDeletionStatus(item.id)}>Move To Trash</button>
                            <button  className='btn btn-outline-warning' style={{margin: '5px'}} onClick={(e)=>changeCompletionStatus(item.id)}>Mark Incomplete</button>
                        </div>
                    ))
                }
            </div>
      )
    }
}
export default CompletedTask