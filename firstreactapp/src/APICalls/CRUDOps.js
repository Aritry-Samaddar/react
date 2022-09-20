import React from "react"
import axios from 'axios'
import './CRUDOps.css'
class CRUDOps extends React.Component{
    constructor(props){
        super(props)
        this.state={
            results:[],
            statusText:'',
            ipUser:"",
            ipPhone:"",
            ipEmail:"",
            ipAddress:"",
            flag:false,
            uid:-1,
            ipSearch:"",
            isSearched:false,
            obj:{}
        }
    }
    // componentDidUpdate() {
    //     console.log("didupdate")
    //     axios.get('http://localhost:3001/empDetails').then((res)=>this.setState({results:res.data})).catch((err)=>console.log(err))
    // }
    componentDidMount=()=>{
      axios.get('http://localhost:3001/empDetails').then((res)=>this.setState({results:res.data})).catch((err)=>console.log(err))
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
        if(key==='srh')
        this.setState({ipSearch:e.target.value})
    }
    createUser=(e)=>{
        e.preventDefault()
        if(this.state.ipUser===''||this.state.ipEmail===''||this.state.ipPhone===''||this.state.ipAddress==='') {
            return alert("Please fill all the required fields!")
        }
        let obj={
            id:Date.now(),
            fname:this.state.ipUser,
            email:this.state.ipEmail,
            phone:this.state.ipPhone,
            city:this.state.ipAddress
        }
        axios.post('http://localhost:3001/empDetails',obj).then((res)=>console.log(res)).catch((err)=>console.log(err))
        this.setState({results:[...this.state.results,obj]})
        this.clearForm()
    }
    deleteUser=(e,itemid)=>{
        e.preventDefault()
        axios.delete(`http://localhost:3001/empDetails/${itemid}`).then((res)=>console.log(res)).catch((err)=>console.log(err))
        let temp=this.state.results.filter((item)=>item.id!==itemid)
        this.setState({results:temp})
    }
    updateUser=(e)=>{
        e.preventDefault()
        if(this.state.ipUser===''||this.state.ipEmail===''||this.state.ipPhone===''||this.state.ipAddress==='') {
            return alert("Please fill all the required fields!")
        }
        let obj={
            fname:this.state.ipUser,
            email:this.state.ipEmail,
            phone:this.state.ipPhone,
            city:this.state.ipAddress
        }
        axios.patch(`http://localhost:3001/empDetails/${this.state.uid}`,obj).then((res)=>this.setState({flag:!this.state.flag})).catch((err)=>console.log(err))
        let temp=[...this.state.results]
        let finalData=temp.find((item)=>item.id===this.state.uid)
        finalData.fname=obj.fname
        finalData.email=obj.email
        finalData.phone=obj.phone
        finalData.city=obj.city
        this.setState({results:temp,uid:-1})
        this.clearForm()
    }
    toggleU=(e,itemid)=>{
        let obj = this.state.results.find((item)=>item.id===itemid)
        this.setState({flag:!this.state.flag,uid:itemid,ipUser:obj.fname,ipEmail:obj.email,ipPhone:obj.phone,ipAddress:obj.city})
    }
    clearForm=()=>{
        this.setState({ipUser:'',ipEmail:'',ipPhone:'',ipAddress:'',ipSearch:''})
    }
    searchUser=(e)=>{
        e.preventDefault()
        if(this.state.ipSearch==='') return alert("Please fill all the required fields!")
        let temp=this.state.results.find((item)=>item.fname===this.state.ipSearch)
        if(temp===undefined) {
            this.clearForm()
            return alert("User doesn't exist!")
        }
        else {
            this.setState({obj:temp,isSearched:true})
            this.clearForm()
        }
    }
    handleIt=()=>{
        this.setState({isSearched:false})
    }
    handleKeyS=(e)=>{
        if(e.key==='Enter'){
            this.searchUser(e)
        }
    }
    handleKeyC=(e)=>{
        if(e.key==='Enter'){
            if(this.state.ipUser!==''&&this.state.ipEmail!==''&&this.state.ipPhone!==''&&this.state.ipAddress!=='') {
                if(this.state.flag===true) this.updateUser()
                else this.createUser()
            }
        }
    }
    // onblur,onhover
    render(){
        return(
            <div>
                <h2 style={{textAlign: 'center'}}>Contact Manager!</h2>
                <form className="fd" style={{marginLeft: '140px'}}>
                <input type="text" class="form-control mb-3 m-2" style={{borderRadius: '10px', marginRight: '10px', borderColor: 'black', width: '200px'}} placeholder="Name" onChange={(e)=>this.handleChange(e,'uname')} value={this.state.ipUser}></input>
                <input type="text" class="form-control mb-3 m-2" style={{borderRadius: '10px', marginRight: '10px', borderColor: 'black', width: '200px'}} placeholder="Email" onChange={(e)=>this.handleChange(e,'email')} value={this.state.ipEmail}></input>
                <input type="number" class="form-control mb-3 m-2" style={{borderRadius: '10px', marginRight: '10px', borderColor: 'black', width: '200px'}} placeholder="Phone" onChange={(e)=>this.handleChange(e,'phone')} value={this.state.ipPhone}></input>
                <input type="text" class="form-control mb-3 m-2" style={{borderRadius: '10px', marginRight: '10px', borderColor: 'black', width: '200px'}} placeholder="City" onChange={(e)=>this.handleChange(e,'addr')} value={this.state.ipAddress} onKeyDown={(e)=>this.handleKeyC(e)}></input>
                {
                    this.state.flag ? <button className="f btn btn-outline-info" type="button" style={{width: '140px', height: '40px', marginTop: '7px'}} onClick={(e)=>this.updateUser(e)}>Update Contact</button> :
                    <button className="f btn btn-outline-success" type="button" style={{width: '120px', height: '40px', marginTop: '7px'}} onClick={(e)=>this.createUser(e)}>Add Contact</button>
                }
                </form>
               {/* <h3>{this.state.statusText}</h3> */}
               <form className="fd" style={{marginLeft: '450px'}}>
                <input type="text" class="form-control mb-3 m-2" style={{borderRadius: '10px', marginRight: '10px', borderColor: 'black', width: '290px'}} placeholder="Search" onChange={(e)=>this.handleChange(e,'srh')} value={this.state.ipSearch} onKeyDown={(e)=>this.handleKeyS(e)}></input>
                <button className="f btn btn-outline-success" type="button" style={{width: '90px', height: '40px', marginTop: '7px'}} onClick={(e)=>this.searchUser(e)}>Search</button>
               </form>
                {
                    this.state.isSearched ? <a onClick={this.handleIt} href="#" style={{marginLeft: '50px'}}><u><b>Go to home page!</b></u></a> : <></>
                }
               {
                this.state.isSearched ? 
                <div class="container" style={{marginTop: '20px'}}>
                    <div class="row">
                        <div className="col-sm-3">
                            <div className="card k1" style={{margin: '5px', backgroundColor: '#dddddd', boxShadow: '-4px 2px 2px 2px #dcdde1'}}>
                                <div className="card-body">
                                    <h3 className="card-title">Name: {this.state.obj.fname}</h3>
                                    <p className="card-text"><b>Email: </b>{this.state.obj.email}</p>
                                    <p className="card-text"><b>Phone: </b>{this.state.obj.phone}</p>
                                    <p className="card-text"><b>City: </b>{this.state.obj.city}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : 
                <div class="container" style={{marginTop: '20px'}}>
                    <div class="row contact-container">
                {
                    this.state.results.map((item)=>(
                        <div className="col-sm-3">
                            <div className="card k1" style={{margin: '5px', backgroundColor: '#dddddd', boxShadow: '-4px 2px 2px 2px #dcdde1'}}>
                                <div className="card-body">
                                    <h3 className="card-title">Name: {item.fname}</h3>
                                    <p className="card-text"><b>Email: </b>{item.email}</p>
                                    <p className="card-text"><b>Phone: </b>{item.phone}</p>
                                    <p className="card-text"><b>City: </b>{item.city}</p>
                                    <button className="f btn btn-outline-danger" style={{width: '75px', marginRight: '7px'}} onClick={(e)=>this.deleteUser(e,item.id)}>Delete</button>
                                    <button className="f btn btn-outline-success" style={{width: '80px'}} onClick={(e)=>this.toggleU(e,item.id)}>Update</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
                    </div>
                </div>
               }
               
            </div>

        )
    }
}
export default CRUDOps