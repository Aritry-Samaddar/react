import React from 'react'
import Response from './Response'
import Header from './Header'
import TableData from './TableData'
class JustSort extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[]  
        }
    }
    componentDidMount(){
        // if(this.props.value!==1){
        //     let userkey=this.props.userkey
        //     console.log(userkey)
        //     const sorteddata=[...Response.list].sort((a,b)=>Number(a.this.props.userkey)-Number(b.this.props.userkey))
        // this.setState({data:sorteddata})
        // }
        console.log("inside did mount")
        if(this.props.value===0) {
            this.setState({data:Response.list})
        }
        if(this.props.value===2) {
            // const sorteddata=[...Response.list].sort((a,b)=>Number(a.age)-Number(b.age))
            this.setState({data:[...Response.list].sort((a,b)=>Number(a.age)-Number(b.age))})
        }
        else if(this.props.value===3) {
            // const sorteddata=[...Response.list].sort((a,b)=>Number(a.rank)-Number(b.rank))
            this.setState({data:[...Response.list].sort((a,b)=>Number(a.rank)-Number(b.rank))})
        }
        else if(this.props.value===4) {
            // const sorteddata=[...Response.list].sort((a,b)=>Number(a.points)-Number(b.points))
            this.setState({data:[...Response.list].sort((a,b)=>Number(a.points)-Number(b.points))})
        }
        else{
        //  const sorteddata=[...Response.list].sort((a,b)=>a.name.localeCompare(b.name))
         this.setState({data:[...Response.list].sort((a,b)=>a.name.localeCompare(b.name))})
        }
        }
        componentDidUpdate(prevProps) {
            if(prevProps.value!==this.props.value) {
                if(this.props.value===0) {
                    this.setState({data:Response.list})
                }
                if(this.props.value===2) {
                    this.setState({data:[...Response.list].sort((a,b)=>Number(a.age)-Number(b.age))})
                }
                else if(this.props.value===3) {
                    this.setState({data:[...Response.list].sort((a,b)=>Number(a.rank)-Number(b.rank))})
                }
                else if(this.props.value===4) {
                    this.setState({data:[...Response.list].sort((a,b)=>Number(a.points)-Number(b.points))})
                }
                else{
                 this.setState({data:[...Response.list].sort((a,b)=>a.name.localeCompare(b.name))})
                }
            }
        }
    render(){
        console.log("inside render")
        return(
            <div className='bgColor'>
                <Header value={this.props.value}></Header>
                {this.props.value>0 ? <h2 style={{textAlign: 'center'}}>Sorted based on {this.props.userkey} </h2> : <h2 style={{textAlign: 'center'}}>Leaderboard</h2>}
                <TableData tabledata={this.state.data}></TableData>
            </div>
        )
    }
}
export default JustSort