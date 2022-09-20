import './Contact.css'
function Contact() {
    return(
        <>
        <h1 style={{marginLeft: '450px'}} className="animate__animated animate__bounce">Contact Manager</h1>
        <form className="d-flex content" style={{marginLeft: '75px'}}>
        <input className="form-control me-2" placeholder="User Name" aria-label="Search" style={{width: '250px'}} type="search" id="name"/>
        <input className="form-control me-2" placeholder="Email Id" aria-label="Search" style={{width: '250px'}} type="search" id="email"/>
        <input className="form-control me-2" placeholder="Mobile No" aria-label="Search" style={{width: '250px'}} type="number" id="mob"/>
        <input className="form-control me-2" placeholder="City" aria-label="Search" style={{width: '250px'}} type="search" id="city"/>
        <input className="btn btn-outline-success k2" style={{marginRight: '5px'}} type="submit" id="sub-btn"/>
        </form>
        </>
    )
}
export default Contact