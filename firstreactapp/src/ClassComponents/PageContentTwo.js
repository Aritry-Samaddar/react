import React from "react";
import './PageContent.css'
import Div from "./Div";
class PageContentTwo extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {data} = this.props
        return(
<>
<div className="container-fluid" style={{marginTop: '5%'}}>
    <div className="container">
            <div className="row">
                {data.map((data)=>{
                    return(
                        <Div item={data}></Div>
                    )
                })}
            </div>
    </div>
</div>
</>
        )
    }
}

export default PageContentTwo