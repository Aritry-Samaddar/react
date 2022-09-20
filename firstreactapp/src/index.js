import React from 'react';
import ReactDOM from 'react-dom/client';
import Complete from './others';
import Footer from './others/Footer';
import StateOne from './State/StateOne'
import { UserDetailsTwo } from './UserDetailsTwo';
import StateTwo from './State/StateTwo'
import RootComponent from './State/RootComponent';
import ContactManager from './ContactManager/ContactManager';
import LifeCycleMethods from './LifeCycleMethods/LifeCycleMethods';
import PageContent from './ClassComponents/PageContent'
// import PageContentTwo from './ClassComponents/PageContentTwo';
import { UserDetails } from './UserDetails';
import PureCompoEg from './LifeCycleMethods/PureCompoEg';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<>
{/* <h1 style={{textAlign: "center"}}>Welcome to React JS!</h1>
<Complete></Complete> */}
{/* <PageContent data={UserDetails}></PageContent> */}
{/* <PageContentTwo data={UserDetails}></PageContentTwo> */}
{/* <Footer></Footer> */}
{/* <StateOne data={UserDetailsTwo}></StateOne> */}
{/* <StateTwo></StateTwo> */}
{/* <RootComponent></RootComponent> */}
{/* <ContactManager></ContactManager> */}
{/* <LifeCycleMethods></LifeCycleMethods> */}
{/* <LifeCycleMethods initialMsg="initial value"></LifeCycleMethods> */}
{/* <PureCompoEg></PureCompoEg> */}
<App></App>
</>
);