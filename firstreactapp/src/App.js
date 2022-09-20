import productDetails from './WHOC/EData'
import clothing from './WHOC/CData'
import ElectronicProducts from './WOHOC/ElectronicProducts'
import ClothingProducts from './WOHOC/ClothingProducts'
import FilterProductsElectronic from './WHOC/FilterProductsElectronic'
import FilterProductsClothing from './WHOC/FilterProductsClothing'
import ContactManagerComp from './ContactManagerTwo/ContactManagerComp'
import contactDetails from './ContactManagerTwo/contactDetails'
import CRUDOps from './APICalls/CRUDOps'
import data from './TaskManager/TaskManagerData'
import TaskManager from './TaskManager/TaskManager'
import React from "react";
import {BrowserRouter,Route,Routes,Link, NavLink} from 'react-router-dom'
// import { BrowserRouter, Switch ,Route,NavLink} from "react-router-dom";
import LeaderBoard from './ScoreDashBoard/LeaderBoard'
import JustSort from './ScoreDashBoard/JustSort'
import ImageSearch from './APICalls/ImageSearch'
import BlogSearch from './APICalls/BlogSearch'
import Ticket from './Ticket/Ticket'
import ticketData from './Ticket/TicketData'
// import LoginFunctional from './NavigateAndParams/LoginFunctional'
// import DashboardFunctional from './NavigateAndParams/DashboardFunctional'
// import UserPage from './NestedRoutes/UserPage'
// import Login from './NestedRoutes/Login'
// import Dashboard from './NestedRoutes/Dashboard'
import './App.css'
import PageNotFound from './NestedRoutes/PageNotFound'
import SampleRefComponent from './RefExamples/SampleRefComponent'
import CreatingRefWithCBFunc from './RefExamples/CreatingRefWithCBFunc'
import StylingWithRef from './RefExamples/StylingWithRef'
import ParentForm from './RefExamples/ParentForm'
// import { DashBoard, HomePage, Login } from './V5Components/VFiveComponents'
function App() {
    return(
        <div>
            {/* <ElectronicProducts data={productDetails}></ElectronicProducts> */}
            {/* <ClothingProducts data={clothing}></ClothingProducts> */}
            {/* <FilterProductsClothing data={clothing} dataTwo={productDetails}></FilterProductsClothing> */}
            {/* <FilterProductsClothing data={productDetails}></FilterProductsClothing> */}
            {/* <ContactManagerComp data={contactDetails}></ContactManagerComp> */}
            {/* <CRUDOps></CRUDOps> */}
            {/* <TaskManager data={data}></TaskManager> */}

            {/* <BrowserRouter>
                <nav>
                    <Link to='/image' style={{margin: '10px'}}>Image Search</Link>
                    <Link to='/search' style={{margin: '10px'}}>Blog Search</Link>
                </nav>
                <Routes>
                    <Route path='/image' element={<ImageSearch></ImageSearch>}></Route>
                    <Route path='/search' element={<BlogSearch></BlogSearch>}></Route>
                </Routes>
            </BrowserRouter> */}

            {/* <BrowserRouter>
                <Routes>
                    <Route path='/' element={<JustSort userkey='lead' value={0}></JustSort>}></Route>
                    <Route path='/name'element={<JustSort userkey='name' value={1}></JustSort>}></Route>
                    <Route path='/age' element={<JustSort userkey='age' value={2}></JustSort>}></Route>
                    <Route path='/rank' element={<JustSort userkey='rank' value={3}></JustSort>}></Route>
                    <Route path='/score' element={<JustSort userkey='points' value={4}></JustSort>}></Route>
                </Routes>
            </BrowserRouter> */}

            {/* <Ticket data={ticketData}></Ticket> */}

            {/* <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginFunctional></LoginFunctional>}></Route>
                    <Route path='/dashboard/:userName' element={<DashboardFunctional></DashboardFunctional>}></Route>
                </Routes>
            </BrowserRouter> */}

            {/* <BrowserRouter>
                <NavLink to='/user/login' className="c" style={({isActive})=>({color: isActive ? 'red' : 'blue'})}>Login</NavLink>
                <NavLink to='/user/dashboard' className="c" style={({isActive})=>({color: isActive ? 'red' : 'blue'})}>Dashboard</NavLink>

                <NavLink to='/user/login' className='d'>
                    {
                        ({isActive})=>(<button className={isActive?'btn btn-danger':'btn btn-primary'}>Login</button>)
                    }
                </NavLink>
                <NavLink to='/user/dashboard' className='d'>
                    {
                        ({isActive})=>(<button className={isActive?'btn btn-danger':'btn btn-primary'}>Dashboard</button>)
                    }
                </NavLink>

                <Routes>
                    <Route path='/user' element={<UserPage></UserPage>}>
                        <Route path='login' element={<Login></Login>}></Route>
                        <Route path='dashboard' element={<Dashboard></Dashboard>}></Route>
                        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
                    </Route>
                    <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
                </Routes>
            </BrowserRouter> */}


            {/* <BrowserRouter>
            <div>
                <NavLink to='/home' className='c' activeClassName='active-link'>Home</NavLink>
                <NavLink to='/dashboard' className='c' activeClassName='active-link'>Dashboard</NavLink>
                <NavLink to='/login' className='c' activeClassName='active-link'>Login</NavLink>
            </div>
                <Switch>
                    <Route path='/home'><HomePage></HomePage></Route>
                    <Route path='/dashboard'><DashBoard></DashBoard></Route>
                    <Route path='/login'><Login></Login></Route>
                </Switch>
            </BrowserRouter> */}

            {/* <SampleRefComponent></SampleRefComponent> */}
            {/* <CreatingRefWithCBFunc></CreatingRefWithCBFunc> */}
            {/* <StylingWithRef></StylingWithRef> */}
            {/* <ParentForm></ParentForm> */}

            
        </div>
    )
}
export default App