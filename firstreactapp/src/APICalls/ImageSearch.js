import React from "react";
import axios from "axios";
import './ImageSearch.css'
class ImageSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            results:[],
            searchItem:''
        }
    }
    handleChange=(e)=>{
        this.setState({searchItem:e.target.value})
    }
    handleSearch=(e)=>{
        e.preventDefault()
        axios.get(`https://api.unsplash.com/search/photos?query=${this.state.searchItem}&client_id=g-CkJouIP4PzGu4t1riJ1A95CbqrbORCPkrXV5hJ6Yc`).then((res)=>this.setState({results:res.data.results})).catch((err)=>console.log(err))
        this.clearForm()
    }
    handleKey=(e)=>{
        if(e.key==='Enter') {
            this.handleSearch(e)
            this.clearForm()
        }
    }
    clearForm=()=>{
      this.setState({searchItem:''})
    }
    render() {
      return (
        <div>
          <h2 style={{textAlign: 'center'}}>Search Image</h2>
          <br></br>
          <form className="fd" style={{marginLeft: '380px'}}>
            <input type="text" className="form-control" placeholder="Enter Image type" style={{width: '450px',marginRight: '10px',height: '45px'}} onChange={(e)=>this.handleChange(e)} onKeyDown={(e)=>this.handleKey(e)} value={this.state.searchItem}></input>
            <button type="button" className="btn btn-outline-success" style={{width: '75px',height: '45px'}} onClick={(e)=>this.handleSearch(e)}>Search</button>
          </form>
          {
            this.state.results.map((item)=>(
                <img style={{border: 'solid',padding: '10px',margin: '10px',height: '200px',width: '200px'}} src={item.urls.thumb} alt="not found"></img>
            ))
          }
        </div>
      )
    }
}
export default ImageSearch