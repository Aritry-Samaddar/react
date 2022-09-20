import React from "react";
import hocComponent from "./hocComponent";
import './FilterProductsClothing.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class FilterProductsClothing extends React.Component {
    render() {
        const {result,handleChange,handleSearch,search,searchRes,flag,handleIt,handleKey}=this.props
        const settings = {
            arrows: true,
            infinite: true,
            dots: true,
            // centerMode: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            lazyLoad: true,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 500
          };
        return(
            <div>
                <div style={{marginLeft: '450px'}}>
                    <form className="fd" style={{textAlign: 'center', marginTop: '10px'}}>
                        <input type='text' class="form-control mb-3 m-2" style={{borderRadius: '10px', marginRight: '10px', borderColor: 'black', width: '250px'}} placeholder="Enter product name" onChange={(e)=>handleChange(e)} onKeyDown={(e)=>handleKey(e)} value={search}></input>
                        <button className="k btn btn-primary" type="button" style={{width: '100px', backgroundColor: '#008000', height: '40px', marginTop: '7px'}} onClick={(e)=>handleSearch(e)}>Search</button>
                    </form>
                </div>
                {
                    flag ? <a onClick={handleIt} href="#" style={{marginLeft: '50px'}}><u><b>Go to home page!</b></u></a> : <></>
                }
                {
                    flag ? 
                    <div className="container">
                        <div className="row">
                            {
                                searchRes.map((item)=>(
                                    <div className="col-sm-12 col-lg-3">
                                        <div className="card cards" style={{width: '300px', margin: '7px', backgroundColor: `${item.color}`}}>
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
                                            <a href="#" style={{width: '100px'}}><p className="d"><u>See More</u><i className="fa-solid fa-angle-up"></i></p></a>
                                            </div>
                                        </div>
                                    </div>
                                )) 
                            }
                        </div>
                    </div>
                    : 
                <div className="imgslider">
                <Slider {...settings}>
                {
                    result.map((item)=>(
                        <div>
                            <div className="card cards" style={{width: '300px', margin: '7px', backgroundColor: `${item.color}`}}>
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
                                <a href="#" style={{width: '100px'}}><p className="d"><u>See More</u><i className="fa-solid fa-angle-up"></i></p></a>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </Slider>
                </div>
                }
            </div>
        )
    }
}
export default hocComponent(FilterProductsClothing)