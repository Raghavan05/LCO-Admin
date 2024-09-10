import React from "react";
import "./sidebar.scss";
import NavItem from "react-bootstrap/esm/NavItem";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const Index = () => {
    return (
        <div className="sideNavBar--desktop">
            <div className="sideNavBar--desktop__header">
                <p>I Cable</p>
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
                        <NavLink to={"tasks"} className="nav-link">
                            <i className="bi bi-list-check"></i>
                            <span>Tasks</span>
                        </NavLink>
                    </NavItem>
                    <NavItem className="navItem">
                        <NavLink to={"employee"} className="nav-link">
                            <i className="bi bi-person-gear"></i>
                            <span>Employees</span>
                        </NavLink>
                    </NavItem>
                    <NavItem className="navItem">
                        <NavLink to={"customers"} className="nav-link">
                            <i className="bi bi-people"></i>
                            <span>Customers</span>
                        </NavLink>
                    </NavItem>
                    <NavItem className="navItem">
                        <NavLink to={"complaints"} className="nav-link">
                            <i className="bi bi-ui-radios"></i>
                            <span>Complaints</span>
                        </NavLink>
                    </NavItem>
                    <NavItem className="navItem">
                        <NavLink to={"forum"} className="nav-link">
                            <i className="bi bi-chat-left-text"></i>
                            <span>Forum</span>
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        </div>
    );
};

export default Index;
