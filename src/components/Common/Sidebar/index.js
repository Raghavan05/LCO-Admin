import React from "react";
import "./sidebar.scss";
import NavItem from "react-bootstrap/esm/NavItem";
import Nav from "react-bootstrap/Nav";
import { NavLink, useNavigate } from "react-router-dom";

const Index = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Perform logout actions, e.g., clearing tokens or session storage
        sessionStorage.clear(); // Example: Clear local storage
        navigate("/"); // Redirect to the login page
    };

    return (
        <div className="sideNavBar--desktop">
            <div className="sideNavBar--desktop__header">
                <p>ICable</p>
            </div>
            <div className="sideNavBar--desktop__navContent">
                <Nav className="sideNavBar--desktop__navContent__menuSection">
                    <NavItem className="navItem">
                        <NavLink to={"dashboard"} className="nav-link">
                            <i className="bi bi-speedometer2"></i>
                            <span>Dashboard</span>
                        </NavLink>
                    </NavItem>
                    <NavItem className="navItem">
                        <NavLink to={"operators"} className="nav-link">
                            <i className="bi bi-person-gear"></i>
                            <span>Operators</span>
                        </NavLink>
                    </NavItem>
                    <NavItem className="navItem">
                        <NavLink to={"employee"} className="nav-link">
                            <i className="bi bi-people"></i>
                            <span>Employee</span>
                        </NavLink>
                    </NavItem>

                    <NavItem className="navItem">
                        <NavLink to={"customers"} className="nav-link">
                            <i className="bi bi-people"></i>
                            <span>Customers</span>
                        </NavLink>
                    </NavItem>
                    <NavItem className="navItem">
                        <NavLink to={"installation"} className="nav-link">
                            <i className="bi bi-list-check"></i>
                            <span>Installation</span>
                        </NavLink>
                    </NavItem>
                    <NavItem className="navItem">
                        <NavLink to={"complaints"} className="nav-link">
                            <i className="bi bi-ui-radios"></i>
                            <span>Complaints</span>
                        </NavLink>
                    </NavItem>
                    <NavItem className="navItem">
                        <NavLink to={"serviceArea"} className="nav-link">
                            <i className="bi bi-people"></i>
                            <span>Service Area</span>
                        </NavLink>
                    </NavItem>
                    <NavItem className="navItem">
                        <NavLink to={"cablePlans"} className="nav-link">
                            <i className="bi bi-people"></i>
                            <span>Cable Plan</span>
                        </NavLink>
                    </NavItem>
                    <NavItem className="navItem">
                        <NavLink to={"internetPlans"} className="nav-link">
                            <i className="bi bi-people"></i>
                            <span>Internet Plan</span>
                        </NavLink>
                    </NavItem>
                </Nav>

                {/* Logout Button */}
                <div className="sideNavBar--desktop__logoutSection">
    <button onClick={handleLogout} className="logoutButton">
        <i className="bi bi-box-arrow-right"></i>
        <span>Logout</span>
    </button>
</div>

            </div>
        </div>
    );
};

export default Index;
