import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./FinalProject/Components/Admin";
import Home from "./FinalProject/Components/Home";
import Login from "./FinalProject/Components/Login";
import Profile from "./FinalProject/Components/Profile";
import Sales from "./FinalProject/Components/Sales";
import Stocks from "./FinalProject/Components/Stocks";
import Update from "./FinalProject/Components/Update";
import Users from "./FinalProject/Components/Users";
function App() {
  return (
      <div>
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={localStorage.getItem('userid')?localStorage.getItem('role')==='admin'?<Admin></Admin>:<User></User>:<Login></Login>}></Route> */}
                <Route path="/" element={<Login></Login>}></Route>
                <Route path="/admin_dashboard" element={<Admin></Admin>}></Route>
                <Route path="/admin_home" element={<Home></Home>}></Route>
                <Route path="/update_product" element={<Update></Update>}></Route>
                <Route path="/users" element={<Users></Users>}></Route>
                <Route path="/sales" element={<Sales></Sales>}></Route>
                <Route path="/stocks" element={<Stocks></Stocks>}></Route>
                <Route path="/admin_profile" element={<Profile></Profile>}></Route>
            </Routes>
        </BrowserRouter>
      </div>
  );
}
export default App;