import React from "react"
import _isEqual from 'lodash/isEqual'
class DeletedTask extends React.Component {
    constructor(props) {
        super(props)
    }
    shouldComponentUpdate(nextProps) {
        if(_isEqual(nextProps.getDeletedTask,this.props.getDeletedTask)) return false
        else return true
    }
    render() {
        console.log("deleted")
        // const styleBg={
        //     backgroundColor:"aqua"
        // }
        // const borderstyle={
        //     borderStyle:'double',
        //     backgroundColor:'#e04c60'
        // }
        const {getDeletedTask,changeDeletionStatus,handlePermanentDelete}=this.props
      return (
            <div>
                <h2 className="card-title" style={{textAlign: 'center'}}>Deleted Tasks</h2>
                {
                    getDeletedTask.map((item)=>(
                        <div style={{border: 'solid'}}>
                            <h3 className="card-text">{item.taskname}</h3>
                            <h4 className="card-text">{item.taskdesc}</h4>
                            <button className='btn btn-outline-info' style={{margin: '5px'}} onClick={(e)=>changeDeletionStatus(item.id)}>Restore</button>
                            <button className="btn btn-outline-danger" style={{margin: '5px'}} onClick={(e)=>handlePermanentDelete(item.id)}>Delete Permanently</button>
                        </div>
                    ))
                }
            </div>
      )
    }
}
export default DeletedTask