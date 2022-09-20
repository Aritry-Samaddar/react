import React, {Component} from "react";
import './PageContent.css'
import Div from "./Div";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DivOne from './DivOne'
import DivTwo from "./DivTwo";
class PageContent extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            flag:false,
            arr:[]
        }
    }
    toggle=()=>{
        this.setState({flag:!(this.state.flag)})
    }
    render() {
        const {data} = this.props
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
<>
    <div className="imgslider">
        <Slider {...settings}>
            {data.map((item) => (
                <Div item={item}></Div>
            ))}
        </Slider>
    </div>
{/* <div className="container-fluid" style={{marginTop: '5%'}}>
    <div className="row">
        <div className="col-sm-12">
            <div id="inam" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div style={{marginLeft: '5%'}}>
                        {
                            data.map((item) => {
                                return(
                                    <Div item={item}></Div>
                                    // this.state.arr.length === 3 ? <DivOne data={this.state.arr}></DivOne> : <>{this.state.arr.push(item)}</>
                                // this.state.arr.length === 3 ? this.state.flag === false ? (<DivOne data={this.state.arr}></DivOne>, this.setState({flag:true, arr:[]})) : (<DivTwo data={this.state.arr}></DivTwo>, this.setState({arr:[]})) : this.setState({arr:this.state.arr.push(item)})
                                )
                            })
                        }
                    </div>
                </div>
                <a href="#inam" className="carousel-control-prev" data-slide="prev">
                    <span className="carousel-control-prev-icon" style={{marginLeft: '-80px', backgroundColor: 'black'}} onClick={this.toggle}></span>
                </a>
                <a href="#inam" className="carousel-control-next" data-slide="next">
                    <span className="carousel-control-next-icon" style={{marginRight: '-80px', backgroundColor: 'black'}} onClick={this.toggle}></span>
                </a>
            </div>
        </div>
    </div>
</div> */}
</>
        )
    }
}

export default PageContent