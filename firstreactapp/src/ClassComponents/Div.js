import React from "react";
class Div extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {item} = this.props
        return(
            //  className="col-sm-12 col-lg-4"
            // <div>
                <div className="card k1" style={{width: '300px', margin: '7px', backgroundColor: 'black'}}>
                    <img src={`${item.image}`} className="card-img-top" alt='image' style={{border: 'solid', height: '225px'}}/>
                        <div className="card-body">
                                <a href="#">
                                    <h5 className="card-title d2"><u>{item.title}</u></h5>
                                </a>
                                <i className="fa-solid fa-star" style={{color: '#ffa700'}}></i>
                                <i className="fa-solid fa-star" style={{color: '#ffa700'}}></i>
                                <i className="fa-solid fa-star" style={{color: '#ffa700'}}></i>
                                <i className="fa-solid fa-star" style={{color: '#ffa700'}}></i>
                                <i className="fa-solid fa-star-half-stroke" style={{color: '#ffa700'}}></i>
                                <p style={{fontSize: '90%'}}>{item.title2}</p>
                                <p className="card-text">{item.body}
                                    <br/> {item.body2}
                                    <br/> {item.body3}
                                    <br/> {item.body4}
                                </p>
                        </div>
                        <button className="k btn btn-primary" type="button" style={{width: '150px', marginLeft: '65px', backgroundColor: '#ffa700'}}>
                            {item.button}
                        </button>
                        <div class="card-body x" style={{textAlign: 'center'}}>
                            <a href="#" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1" style={{width: '100px'}}><p className="d k"><u>{item.button2}</u><i className="fa-solid fa-angle-up"></i></p></a>
                        </div>
                </div>
            // </div>
        )
    }
}
export default Div