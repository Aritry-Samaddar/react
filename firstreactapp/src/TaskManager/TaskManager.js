import React from "react"
import PendingTask from "./PendingTask"
import CompletedTask from "./CompletedTask"
import DeletedTask from "./DeletedTask"
import './TaskManager.css'
class TaskManager extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            tasks:this.props.data,
            tname:'',
            des:''
        }
    }
    getCompletedTask=()=>{
        return this.state.tasks.filter((item)=>item.completion===true&&item.deletion===false)
    }
    getPendingTask=()=>{
        return this.state.tasks.filter((item)=>item.completion===false&&item.deletion===false)
    }
    getDeletedTask=()=>{
        return this.state.tasks.filter((item)=>item.deletion===true)
    }
    changeCompletionStatus=(itemid)=>{
        let temp=[...this.state.tasks]
        const obj=temp.find((item)=>item.id===itemid)
        obj.completion=!obj.completion
        this.setState({tasks:temp})
    }
    changeDeletionStatus=(itemid)=>{
        let temp=[...this.state.tasks]
        const obj=temp.find((item)=>item.id===itemid)
        obj.deletion=!obj.deletion
        this.setState({tasks:temp})
    }
    handleTask=(e,id)=>{
        if(id==='tname') this.setState({tname:e.target.value})
        if(id==='des') this.setState({des:e.target.value})
    }
    handleAdd=(e)=>{
        e.preventDefault()
        let obj={
            id:Date.now(),
            taskname:this.state.tname,
            taskdesc:this.state.des,
            completion:false,
            deletion:false
        }
        this.setState({tasks:[...this.state.tasks,obj]})
        this.clearForm()
    }
    clearForm=()=>{
        this.setState({tname:'',des:''})
    }
    handlePermanentDelete=(itemid)=>{
        let temp=this.state.tasks.filter((item)=>item.id!==itemid)
        this.setState({tasks:temp})
    }
    render() {
        console.log("main render")
      return (
        <div className="container" style={{marginTop: '50px'}}>
            <h2 style={{textAlign: 'center'}}>Your Task Manager!</h2>
            <br></br>
            <form className="fd" style={{marginLeft: '70px'}}>
                <input type="text" className="form-control" placeholder="Task Name" style={{width: '450px',marginRight: '10px'}} onChange={(e)=>this.handleTask(e,'tname')} value={this.state.tname}></input>
                <input type="text" className="form-control" placeholder="Task Description" style={{width: '450px',marginRight: '10px'}} onChange={(e)=>this.handleTask(e,'des')} value={this.state.des}></input>
                <button type="button" className="btn btn-outline-success" style={{height: '40px',width: '60px'}} onClick={(e)=>this.handleAdd(e)}>Add</button>
            </form>
            <br></br>
        <div className="row">
            <div className="col-sm-12 col-lg-4">
            <div className="card" style={{width: '360px',borderColor: 'black',borderRadius: '6px'}}>
                <div className="card-body">
                    <PendingTask getPendingTask={this.getPendingTask()} changeCompletionStatus={this.changeCompletionStatus}></PendingTask>
                </div>
            </div>
            </div>
            <div className="col-sm-12 col-lg-4">
            <div className="card" style={{width: '360px',borderColor: 'black',borderRadius: '6px'}}>
                <div className="card-body">
                <CompletedTask getCompletedTask={this.getCompletedTask()} changeCompletionStatus={this.changeCompletionStatus} changeDeletionStatus={this.changeDeletionStatus}></CompletedTask>
                </div>
            </div>
            </div>
            <div className="col-sm-12 col-lg-4">
            <div className="card" style={{width: '360px',borderColor: 'black',borderRadius: '6px'}}>
                <div className="card-body">
                <DeletedTask getDeletedTask={this.getDeletedTask()} changeDeletionStatus={this.changeDeletionStatus} handlePermanentDelete={this.handlePermanentDelete}></DeletedTask>
                </div>
            </div>
            </div>
        </div>
        </div>
      )
    }
}
export default TaskManager