import React from "react";
import { Route, Routes } from "react-router";
import AdminDefaultLayout from "../layouts/AdminDefaultLayout";
import Customer from "../pages/Customer";
import CustomerList from "../pages/Customer/CustomerList";
import Operator from "../pages/Operator";

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="admin" element={<AdminDefaultLayout />}>
                <Route path="dashboard" element={<div>Hai</div>} />
                <Route path="tasks" element={<div>service</div>} />
                <Route path="operators" >
                    <Route index element={<Operator />} />
                </Route>
                <Route path="customers">
                    <Route index element={<Customer />}/>
                    <Route path="list" element={<CustomerList />} />
                </Route>
                <Route path="complaints" element={<div>service</div>} />
            </Route>
        </Routes>
    );
};

export default AdminRoutes;
