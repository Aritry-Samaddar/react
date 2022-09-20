import './UserNavbar.css'
import { NavLink } from 'react-router-dom'
const UserNavbar=()=>{
    const navLinkStyles = ({isActive})=>{
        return {
            // fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: 'none',
            color: isActive ? 'black' : '#C06D1F',
            fontSize: isActive ? '15px' : '15px',
            // borderStyle: isActive ? 'solid' : '',
            padding: isActive ? '25px' : '25px',
            // boxShadow: isActive ? '0px 0px 5px 0px #888888' : '',
            // borderRadius: isActive ? '5px' : '',
            borderBottom: isActive ? '3px solid #523A28' : '',
            backgroundColor: isActive ? '#E6E6E6' : '',
            marginTop: isActive ? '5px' : '5px'
        }
    }
    return(
        <div className="navbar2">
            <div style={{display: 'flex',flexDirection: 'row',alignItems: 'flex-start',cursor: 'pointer'}}>
                <img src='images/logo3.png' style={{width: '60px',height: '60px',margin: '10px'}}/>
                <h3 style={{fontFamily: 'serif',marginTop: '30px',color: '#814827'}}>Dream Decors</h3>
                <div style={{display: 'flex',marginLeft: '400px'}}>
                <NavLink to='/' style={navLinkStyles} className="x y"><b>Home</b></NavLink>
                <NavLink to='/shop' style={navLinkStyles} className="x y"><b>Shop</b></NavLink>
                <NavLink to='/cart' style={navLinkStyles} className="x y"><b>Cart</b></NavLink>
                <NavLink to='/wishlist' style={navLinkStyles} className="x y"><b>Wishlist</b></NavLink>
                <NavLink to='/signin' style={navLinkStyles} className="x y"><b>Signin</b></NavLink>
                <NavLink to='/signup' style={navLinkStyles} className="x y"><b>Signup</b></NavLink>
                </div>
            </div>
        </div>
    )
}
export default UserNavbar