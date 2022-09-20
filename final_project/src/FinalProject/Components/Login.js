import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { changeRole,signin } from "../Slice";
const Login=()=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {userRole,userId,user}=useSelector((state)=>state.info.data)
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => {
        dispatch(signin({email:data.email,password:data.password}))
    }
    return(
        <>
        {
            userRole==='admin'?
            <>
                {dispatch(changeRole())}
                {localStorage.setItem('userid',userId)}
                {localStorage.setItem('role',userRole)}
                {/* {localStorage.setItem('user',JSON.stringify(user))} */}
                {navigate('/admin_home')}
            </> : userRole==='user'?<>
                {dispatch(changeRole())}
                {localStorage.setItem('userid',userId)}
                {localStorage.setItem('role',userRole)}
                {/* {localStorage.setItem('user',JSON.stringify(user))} */}
                {navigate('/user_dashboard')}
            </>:
            <div className="Signin loginbody">
            <section>
                <div className="login">
                    <div className="col-3">
                        <img src="https://www.kindpng.com/picc/m/273-2738804_php-login-and-authentication-login-hd-png-download.png" alt="img"/>
                    </div>
                    <div className="col-4">
                        <h2>Sign In</h2>
                        <span>Please login to continue!</span>
                        <form id='loginform' className='loginflex loginflex-col' onSubmit={handleSubmit(onSubmit)}>
                            <input type='text' placeholder="Email" {...register("email",{ required : true })} style={{marginBottom: '15px'}}/>
                            {errors.email?.type === "required" && <p style={{color: 'red',fontSize: '0.80rem',height: '0.1px',marginLeft: '10px',marginTop: '55px',position: 'absolute'}}>This field is required!</p>}
                            <input type='password' placeholder="Password" {...register("password",{ required : true })} style={{marginBottom: '20px'}}/>
                            {errors.password?.type === "required" && <p style={{color: 'red',fontSize: '0.80rem',height: '0.1px',marginLeft: '10px',marginTop: '142px',position: 'absolute'}}>This field is required!</p>}
                            <button className="loginbtn">Login</button>
                            <Link to='/forgot_password'>Forgot Password?</Link>
                            <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
                        </form>
                    </div>
                </div>
            </section>
        </div>
        }
        </>
    )
}
export default Login