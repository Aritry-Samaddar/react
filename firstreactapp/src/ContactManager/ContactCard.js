import React from 'react';
class ContactCard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {fname,email,phone} = this.props.data
      return (
        <div className="col-sm-3">
            <div className="card" style={{margin: '5px', backgroundColor: '#dddddd', boxShadow: '-4px 2px 2px 2px #dcdde1'}}>
                <div className="card-body">
                    <h3 className="card-title">{fname}</h3>
                    <p className="card-text">{email}</p>
                    <p className="card-text">{phone}</p>
                    <button className="btn btn-outline-danger" style={{marginRight: '10px'}}>Delete</button>
                    <button className="btn btn-outline-success">Edit</button>
                </div>
            </div>
        </div>
      )
    }
}
export default ContactCard