import React from "react";
const hocComponent=(InputComponent)=>{
    return class NewComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state={
                productDetails:[],
                productDetailsTwo:[],
                search:'',
                // result:[],
                result:[...this.props.data,...this.props.dataTwo],
                searchRes:[],
                flag:false
                // result:[...this.props.data]
            }
        }
        static getDerivedStateFromProps(props, state) {
            return({productDetails:props.data, productDetailsTwo:props.dataTwo})
            // return({productDetails:props.data})
        }
        handleChange=(event)=>{
            this.setState({search:event.target.value})
        }
        handleSearch=(event)=>{
            event.preventDefault()
            this.setState({flag:true})
            // this.setState({result:this.state.productDetails.filter((item)=>item.pName===this.state.search.toUpperCase())})
            let data=this.state.productDetails.filter((item)=>item.pName===this.state.search.toUpperCase())
            let dataTwo=this.state.productDetailsTwo.filter((item)=>item.pName===this.state.search.toUpperCase())
            let finalData=[...data,...dataTwo]
            // let finalData=[...data]
            this.setState({searchRes:finalData,search:''})
        }
        toggleFlag=()=>{
            this.setState({flag:!this.state.flag})
        }
        handleIt=()=>{
            this.toggleFlag()
        }
        handleKey=(e)=>{
            if(e.key==='Enter'){
                this.handleSearch(e)
            }
        }
        render() {
            return(
                <InputComponent result={this.state.result} handleChange={this.handleChange} handleSearch={this.handleSearch} search={this.state.search} searchRes={this.state.searchRes} flag={this.state.flag} handleIt={this.handleIt} handleKey={this.handleKey}></InputComponent>
            )
        }
    }
}
export default hocComponent