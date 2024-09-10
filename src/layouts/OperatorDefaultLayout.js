import React from 'react'
import { Outlet } from "react-router";

import Sidebar from "../components/Operator/Sidebar";
import TopBar from "../components/Common/TopBar";

const OperatorDefaultLayout = () => {
    return (
        <div className="page-wrapper">
            <div className="navBarContainer">
                <Sidebar />
            </div>
            <div className="parentContainer">
                <div className="topbar">
                    <TopBar />
                </div>
                <div className="page-content container-fluid">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default OperatorDefaultLayout