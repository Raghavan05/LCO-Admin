import React from "react";
import { Route, Routes } from "react-router";

import AdminDefaultLayout from "../layouts/AdminDefaultLayout";
import Dashboard from '../pages/Operator/Dashboard';    // need to change
import Operator from "../pages/Admin/Operators";
import Employee from "../pages/Admin/Employee";
import Customer from "../pages/Admin/Customer"
import Complaints from "../pages/Admin/Complaints";
import InternetPlans from "../pages/Admin/InternetPlans";
import CablePlans from "../pages/Admin/CablePlans";
import ServiceArea from "../pages/Admin/ServiceArea";
import Tasks from "../pages/Admin/Tasks";


const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="admin" element={<AdminDefaultLayout />}>
                <Route path="dashboard" element={<Dashboard/>} />
                <Route path="installation" element={<Tasks/>} />
                <Route path="operators" element={<Operator />} />
                <Route path="employee" element={<Employee />} />
                <Route path="customers" element={<Customer />}/>
                <Route path="internetPlans" element={<InternetPlans />} />
                <Route path="cablePlans" element={<CablePlans />} />
                <Route path="serviceArea" element={<ServiceArea />} />
                <Route path="complaints" element={<Complaints />} />
                <Route path="forum" element={<div>iN Progress</div>} />
            </Route>
        </Routes>
    );
};

export default AdminRoutes;
