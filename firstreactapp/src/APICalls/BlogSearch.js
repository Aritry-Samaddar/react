import React from "react";
import axios from "axios";
import './BlogSearch.css'
class BlogSearch extends React.Component {
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
        axios.get(`https://hn.algolia.com/api/v1/search?query=${this.state.searchItem}`).then((res)=>this.setState({results:res.data.hits})).catch((err)=>console.log(err))
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
          <h2 style={{textAlign: 'center'}}>Search Blog</h2>
          <br></br>
          <form className="fd" style={{marginLeft: '380px'}}>
            <input type="text" className="form-control" placeholder="Enter Blog type" style={{width: '450px',marginRight: '10px',height: '45px'}} onChange={(e)=>this.handleChange(e)} onKeyDown={(e)=>this.handleKey(e)} value={this.state.searchItem}></input>
            <button type="button" className="btn btn-outline-success" style={{width: '75px',height: '45px'}} onClick={(e)=>this.handleSearch(e)}>Search</button>
          </form>
          {
            this.state.results.map((item)=>(
                <div style={{border: 'solid',padding: '10px',margin: '10px'}}>
                    <h1>{item.title}</h1>
                    <h2>{item.author}</h2>
                    <a href={item.url} target="_blank">Read this post here</a>
                </div>
            ))
          }
        </div>
      )
    }
}
export default BlogSearch