import React from "react";
import { Route, Routes } from "react-router";

import AdminDefaultLayout from "../layouts/AdminDefaultLayout";
import Dashboard from '../pages/Operator/Dashboard';    // need to change
import Operator from "../pages/Admin/Operators";
import Customer from "../pages/Admin/Customer"
import Complaints from "../pages/Admin/Complaints";
import Tasks from "../pages/Admin/Tasks";


const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="admin" element={<AdminDefaultLayout />}>
                <Route path="dashboard" element={<Dashboard/>} />
                <Route path="installation" element={<Tasks/>} />
                <Route path="operators" element={<Operator />} />
                <Route path="customers" element={<Customer />}/>
                <Route path="complaints" element={<Complaints />} />
                <Route path="forum" element={<div>iN Progress</div>} />
            </Route>
        </Routes>
    );
};

export default AdminRoutes;
