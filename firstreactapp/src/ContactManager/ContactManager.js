import React from 'react';
import Contact from '../others/Contact';
import ContactCard from './ContactCard';
class ContactManager extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            users:[
                {
                    fname:"aritry",
                    email:"aritry@gmail.com",
                    phone:123456789
                },
                {
                    fname:"adity",
                    email:"adity@gmail.com",
                    phone:123456789
                },
                {
                    fname:"john",
                    email:"aritry@gmail.com",
                    phone:123456789
                },
                {
                    fname:"harry",
                    email:"harry@gmail.com",
                    phone:123456789
                }
            ]
        }
    }
    render() {
      return(
        <>
        <Contact></Contact>
        <br></br>
        <div className="container">
            <div className="row">
                {
                    this.state.users.map((item)=>(
                        <ContactCard data={item}></ContactCard>
                    ))
                }
            </div>
        </div>
        </>
      )
    }
}
export default ContactManager