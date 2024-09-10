import React from 'react'
import { Route, Routes } from 'react-router';

import OperatorDefaultLayout from '../layouts/OperatorDefaultLayout';
import Dashboard from '../pages/Operator/Dashboard';
import Tasks from '../pages/Operator/Tasks';
import Complaints from '../pages/Operator/Complaints';
import Customer from "../pages/Operator/Customer";
import Employee from '../pages/Operator/Employee';

const OperatorRoutes = () => {
    return (
        <Routes>
            <Route path='operator' element={<OperatorDefaultLayout />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="tasks" element={<Tasks />} />
                <Route path="complaints" element={<Complaints />} />
                <Route path="operator" element={<Employee />} />
                <Route path="employee" element={<Employee />} />
                <Route path="customers" element={<Customer />} />
            </Route>
        </Routes>
    )
}

export default OperatorRoutes;