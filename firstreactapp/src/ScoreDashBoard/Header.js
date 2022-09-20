import React from "react";
import {Link, NavLink} from 'react-router-dom'
class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            fname:false,
            age:false,
            rank:false,
            score:false
        }
    }
    componentDidMount(){
        if(this.props.value===0) {
            this.setState({fname:false,age:false,rank:false,score:false})
        }
        if(this.props.value===1){
            this.setState({fname:true,age:false,rank:false,score:false})
        }
        if(this.props.value===2){
            this.setState({age:true,fname:false,rank:false,score:false})
        }
        if(this.props.value===3){
            this.setState({rank:true,fname:false,age:false,score:false})
        }
        if(this.props.value===4){
            this.setState({score:true,fname:false,age:false,rank:false})
        }
    }
    componentDidUpdate(prevProps) {
        if(prevProps.value!==this.props.value) {
            if(this.props.value===0) {
                this.setState({fname:false,age:false,rank:false,score:false})
            }
            if(this.props.value===1){
                this.setState({fname:true,age:false,rank:false,score:false})
            }
            if(this.props.value===2){
                this.setState({age:true,fname:false,rank:false,score:false})
            }
            if(this.props.value===3){
                this.setState({rank:true,fname:false,age:false,score:false})
            }
            if(this.props.value===4){
                this.setState({score:true,fname:false,age:false,rank:false})
            }
        }
    }
    render(){
        const {fname,age,rank,score}=this.state
        console.log("inside header")
        return(
            <div>
                {
                    this.props.value>0 ? <Link to='/'><button className="btn btn-outline-success" style={{margin: '5px'}}>Leaderboard</button></Link> : <Link to='/'><button className="btn btn-success" style={{margin: '5px'}}>Leaderboard</button></Link>
                }
                <Link to='/rank'><button className={rank?'btn btn-success':'btn btn-outline-success'} style={{margin: '5px'}}>Rank</button></Link>
                <Link to='/name'><button className={fname?'btn btn-success':'btn btn-outline-success'} style={{margin: '5px'}}>Name</button></Link>
                <Link to='/age'><button className={age?'btn btn-success':'btn btn-outline-success'} style={{margin: '5px'}}>Age</button></Link>
                <Link to='/score'><button className={score?'btn btn-success':'btn btn-outline-success'} style={{margin: '5px'}}>Score</button></Link>
            </div>
        )
    }
}
export default Header