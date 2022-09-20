import './Body.css'
import { UserDetails } from '../UserDetails'
function Body() {
    return(
        <div>
            <div className="container-fluid" style={{marginTop: '5%'}}>
                <div className="container">
                    <div className="row">
                    {
                        UserDetails.map((item) => {
                            return(
                                <div className="col-sm-12 col-lg-3">
                                    <div className='card k1 d3'>
                                        <div>
                                            <img src={`${item.image}`} className="card-img-top ig" alt='image'/>
                                        </div>
                                        <div className='card-body'>
                                            <a href="#">
                                                <h5 className="card-title d2"><u>{item.title}</u></h5>
                                            </a>
                                            <i className="fa-solid fa-star" style={{color: '#ffa700'}}></i>
                                            <i className="fa-solid fa-star" style={{color: '#ffa700'}}></i>
                                            <i className="fa-solid fa-star" style={{color: '#ffa700'}}></i>
                                            <i className="fa-solid fa-star" style={{color: '#ffa700'}}></i>
                                            <i className="fa-solid fa-star-half-stroke" style={{color: '#ffa700'}}></i>
                                            <p style={{fontSize: '85%'}}>{item.title2}</p>
                                            <p className="card-text">{item.body}
                                                <br/> {item.body2}
                                                <br/> {item.body3}
                                                <br/> {item.body4}
                                            </p>
                                        </div>
                                        <button className="k d4 btn btn-primary" type="button">
                                            {item.button}
                                        </button>
                                        <div class="card-body" style={{textAlign: 'center'}}>
                                            <a href="#" style={{width: '100px'}}><p className="d x"><u>{item.button2}</u><i className="fa-solid fa-angle-up"></i></p></a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>   
        </div>
    )
}
export default Body