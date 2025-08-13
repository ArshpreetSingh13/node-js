import { Outlet } from "react-router-dom";

import AdminHeader from "./AdminHeader";
import Footer from "../../User/Layout/Footer";

function AdminMaster() {
    return (
        <>
            <AdminHeader />
            <Outlet />
            <Footer />
        </>
    );
}

export default AdminMaster;