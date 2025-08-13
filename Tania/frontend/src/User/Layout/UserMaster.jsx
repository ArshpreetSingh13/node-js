import { Outlet } from "react-router-dom";
import UserHeader from "./UserHeader";
import Footer from "./Footer";

function UserMaster() {
    return ( 
        <>
        <UserHeader/>
        <Outlet/>
        <Footer/>
        </>
     );
}

export default UserMaster;