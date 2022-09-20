import React from "react";
class ElectronicProducts extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            productDetails:[],
            search:'',
            result:[]
        }
    }
    static getDerivedStateFromProps(props, state) {
        return({productDetails:props.data})
    }
    handleChange=(event)=>{
        console.log(event.target.value)
        this.setState({search:event.target.value})
    }
    handleSearch=(event)=>{
        event.preventDefault()
        console.log("hi")
        this.setState({result:this.state.productDetails.filter((item)=>item.pName===this.state.search)})
        
    }
    render() {
        return(
            <>
            <form>
                <input type='text' placeholder="Enter product name" onChange={(e)=>this.handleChange(e)}></input>
                <button onClick={(e)=>this.handleSearch(e)}>Search</button>
            </form>
            {
                this.state.result.map((item)=>(
                    <div>
                        <h2>Product: {item.pName}</h2>
                        <h3>Price: {item.price}</h3>
                        <h4>Manufacturer: {item.manufacturer}</h4>
                    </div>
                ))
            }
            </>
        )
    }
}
export default ElectronicProducts