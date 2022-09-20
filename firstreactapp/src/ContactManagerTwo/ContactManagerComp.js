import React from "react"
import './ContactManagerComp.css'
class ContactManagerComp extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            contactinfo:this.props.data,
            ipUser:"",
            ipPhone:"",
            ipEmail:"",
            ipAddress:"",
            update:false,
            uid:-1
        }
    }
    handleChange=(e,key)=>{
        if(key==='uname')
        this.setState({ipUser:e.target.value})
        if(key==='phone')
        this.setState({ipPhone:e.target.value})
        if(key==='email')
        this.setState({ipEmail:e.target.value})
        if(key==='addr')
        this.setState({ipAddress:e.target.value})    
    }
    handleContact=(e)=>{
        e.preventDefault()
        const obj={
            id:Date.now(),
            fname:this.state.ipUser,
            phone:this.state.ipPhone,
            email:this.state.ipEmail,
            address:this.state.ipAddress
        }
        let newData = [...this.state.contactinfo,obj]
        this.setState({contactinfo:newData})
        this.clearForm()
    }
    toggleUpdate=()=>{
        this.setState({update:!this.state.update})
    }
    handleDelete=(e,itemid)=>{
        const result=this.state.contactinfo.filter((item)=>item.id!==itemid)
        this.setState({contactinfo:result})
    }
    setUpdateMsg=(e,itemid)=>{
        e.preventDefault()
        this.toggleUpdate()   
        this.setState({uid:itemid})
        this.updateForm(this.state.contactinfo.find((item)=>item.id===itemid))
    }
    handleUpdate=(e)=>{
        e.preventDefault()
        let temp=[...this.state.contactinfo]
        let obj=temp.find((item)=>item.id===this.state.uid)
        obj.fname=this.state.ipUser
        obj.phone=this.state.ipPhone
        obj.email=this.state.ipEmail
        obj.address=this.state.ipAddress
        this.setState({contactinfo:temp})
        this.setState({uid:-1})
        this.clearForm()
        this.toggleUpdate()
    }
    clearForm=()=>{
        this.setState({ipUser:'',ipPhone:'',ipEmail:'',ipAddress:''})
    }
    updateForm=(e)=>{
        this.setState({ipUser:e.fname,ipPhone:e.phone,ipEmail:e.email,ipAddress:e.address})
    }
    render() {
      return (
        <div>
            <div style={{marginLeft: '130px', marginTop: '30px'}}>
            {
                this.state.update?<h2 style={{marginLeft: '330px', color: 'red'}}>Update your contact now!</h2>:<h2 style={{marginLeft: '400px'}}>Contact Manager</h2>
            }
            <form className="fd">
                <input type="text" class="form-control mb-3 m-2" style={{borderRadius: '10px', marginRight: '10px', borderColor: 'black', width: '200px'}} placeholder="Name" onChange={(e)=>this.handleChange(e,'uname')} value={this.state.ipUser}></input>
                <input type="text" class="form-control mb-3 m-2" style={{borderRadius: '10px', marginRight: '10px', borderColor: 'black', width: '200px'}} placeholder="Email" onChange={(e)=>this.handleChange(e,'phone')} value={this.state.ipPhone}></input>
                <input type="number" class="form-control mb-3 m-2" style={{borderRadius: '10px', marginRight: '10px', borderColor: 'black', width: '200px'}} placeholder="Phone" onChange={(e)=>this.handleChange(e,'email')} value={this.state.ipEmail}></input>
                <input type="text" class="form-control mb-3 m-2" style={{borderRadius: '10px', marginRight: '10px', borderColor: 'black', width: '200px'}} placeholder="Address" onChange={(e)=>this.handleChange(e,'addr')} value={this.state.ipAddress}></input>
                {
                    this.state.update?<button className="k btn btn-primary" type="button" style={{width: '150px', backgroundColor: '#008000', height: '40px', marginTop: '7px'}} onClick={(e)=>this.handleUpdate(e)}>Update Contact</button>:<button className="k btn btn-primary" type="button" style={{width: '120px', backgroundColor: '#008000', height: '40px', marginTop: '7px'}} onClick={(e)=>this.handleContact(e)}>Add Contact</button>
                }
            </form>
            </div>
          <div className="container-fluid" style={{margin: '5%'}}>
            <div className="container">
                <div className="row">
                {
                    this.state.contactinfo.map((item)=>(
                        <div className="col-sm-12 col-lg-4">
                            <div className="card k1" style={{width: '300px', margin: '7px'}}>
                                <div className="card-body">
                                    <h1 style={{fontSize: '120%'}}>Name: {item.fname}</h1>
                                    <p className="card-text"><b>Phone: </b>{item.phone}
                                    <br/> <b>Email: </b>{item.email}
                                    <br/> <b>Address: </b>{item.address}
                                    </p>
                                    <button className="k btn btn-primary" type="button" style={{width: '100px', marginRight: '10px', backgroundColor: '#b30000'}} onClick={(e)=>this.handleDelete(e,item.id)}>Delete</button>
                                    <button className="k btn btn-primary" type="button" style={{width: '100px', backgroundColor: '#ffa700'}} onClick={(e)=>this.setUpdateMsg(e,item.id)}>Update</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
        </div>
      )
    }
}
export default ContactManagerComp