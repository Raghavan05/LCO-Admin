import React from "react";
import "../styles/sections/AdminDefaultLayout.scss";
import { Outlet } from "react-router";

import Sidebar from "../components/Common/Sidebar";
import TopBar from "../components/Common/TopBar";

const AdminDefaultLayout = () => {
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
    );
};

export default AdminDefaultLayout;
