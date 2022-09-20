import React from "react";
import Div from './Div'
class DivOne extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {data} = this.props
        return(
            <div className="carousel-item active">
                <div className="container">
                    <div className="row">
                        {
                            data.map((item)=>{
                                return(
                                    <Div item={item}></Div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default DivOne