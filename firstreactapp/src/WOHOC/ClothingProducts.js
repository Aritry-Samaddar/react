import React from "react";
import './ClothingProducts.css'
class ClothingProducts extends React.Component{
    constructor(props){
        super(props)
        this.state={
            productDetails:[],
            search:'',
            result:[],
            pName:'',
            price:'',
            manufacturer:'',
            details:{}
        }
    }
    static getDerivedStateFromProps(props,state){
        return {productDetails:props.data}
    }
    handleChange=(event)=>{
        //console.log(event.target.value)
        this.setState({search:event.target.value})
    }
    handleSearch=(event)=>{
        event.preventDefault()
        let data=this.state.productDetails.filter((item)=>item.pName===this.state.search.toUpperCase())
        this.setState({result:data})
    }
    addDetails=(event)=>{
        event.preventDefault()
        // console.log(event)
        this.setState({productDetails:this.state.productDetails.push(this.state.details)})
        // let {productDetails, details} = this.state
        // productDetails.push(details)
        // console.log(this.state.details)
    }
    addName=(event)=>{
        this.setState({pName:event.target.value})
        this.state.details.pName = this.state.pName
    }
    addPrice=(event)=>{
        this.setState({price:event.target.value})
        this.state.details.price = this.state.price
    }
    addManu=(event)=>{
        this.setState({manufacturer:event.target.value})
        this.state.details.manufacturer = this.state.manufacturer
    }
    render(){
        return(
        <div>
            <form style={{textAlign: 'center', marginTop: '10px'}}>
                <input type="text" style={{borderRadius: '10px', marginRight: '10px', borderColor: 'black'}} placeholder="Product Name" onChange={(e)=>this.addName(e)}></input>
                <input type="text" style={{borderRadius: '10px', marginRight: '10px', borderColor: 'black'}} placeholder="Product Price" onChange={(e)=>this.addPrice(e)}></input>
                <input type="text" style={{borderRadius: '10px', marginRight: '10px', borderColor: 'black'}} placeholder="Product Manufacturer" onChange={(e)=>this.addManu(e)}></input>
                <input type="text" style={{borderRadius: '10px', marginRight: '10px', borderColor: 'black'}} placeholder="Product Delivery Date"></input>
                <button style={{backgroundColor: 'violet'}} onClick={(e)=>this.addDetails(e)}>Submit</button>
            </form>
        <form style={{textAlign: 'center', marginTop: '10px'}}>
            <input type='text' style={{borderRadius: '10px', marginRight: '10px', borderColor: 'black'}} placeholder="Enter product name" onChange={(e)=>this.handleChange(e)}></input>
            <button style={{backgroundColor: 'violet'}} onClick={(e)=>this.handleSearch(e)}>Search</button>
        </form>
        <div className="container-fluid" style={{margin: '5%'}}>
            <div className="container">
                <div className="row">
                {
                    this.state.result.map((item)=>(
                        <div className="col-sm-12 col-lg-4">
                            <div className="card k1" style={{width: '300px', margin: '7px'}}>
                                <img src={`${item.image}`} className="card-img-top" alt='image' style={{border: 'solid', height: '225px'}}/>
                                <div className="card-body">
                                    <h2 style={{fontSize: '90%'}}>{item.pName}</h2>
                                    <p className="card-text">Price: {item.price}
                                    <br/> Manufacturer: {item.manufacturer}
                                    <br/> Expected Delivery Date: {item.expectedDelivery}
                                    </p>
                                </div>
                                <button className="k btn btn-primary" type="button" style={{width: '150px', marginLeft: '65px', backgroundColor: '#ffa700'}}>
                                Add To Cart
                                </button>
                                <div class="card-body x" style={{textAlign: 'center'}}>
                                <a href="#" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1" style={{width: '100px'}}><p className="d k"><u>See More</u><i className="fa-solid fa-angle-up"></i></p></a>
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
export default ClothingProducts