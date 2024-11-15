import React, { useEffect, useState } from "react";
import axios from "axios";
import "./customer.scss";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Badge } from "react-bootstrap";

const tHeadTitle = [
    "Id",
    "Name",
    "Mobile Number",
    "Service Area",
    // "Username",
    "Status",
    "Cable Type",
    "Actions",
];

const CustomerTable = ({ data }) => (
    <Table responsive hover striped>
        <thead className="tHead">
            <tr className="tRow">
                {tHeadTitle.map((title, i) => (
                    <th key={i}>
                        <h6>{title}</h6>
                    </th>
                ))}
            </tr>
        </thead>
        <tbody className="tBody">
            {data.map((customer, i) => (
                <tr className="tRow" key={i}>
                    <td className="tCell identifier">{customer.customerId}</td>
                    <td className="tCell">{customer.customerName}</td>
                    <td className="tCell">{customer.mobileNo}</td>
                    <td className="tCell">{customer.serviceAreaName}</td>
                    {/* <td className="tCell">{customer.email}</td> */}
                    <td className="tCell">
                        <Badge
                            className="pill"
                            bg={customer.status ? "success" : "danger"}
                            pill
                        >
                            {customer.status ? "Active" : "Inactive"}
                        </Badge>
                    </td>
                    <td className="tCell">{customer.cableType}</td>
                    <td className="tCell actionSec">
                        <Button variant="outline-secondary">Reset Password</Button>
                        <a href="#">Details</a>
                    </td>
                </tr>
            ))}
        </tbody>
    </Table>
);

const CustomerPage = () => {
    const [customers, setCustomers] = useState([]);
    
    // Fetch customer data
    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_BASE_URL}/vendors-connect/api/customer/master/customer/customer`,
                    {
                        headers: {
                            Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
                        },
                    }
                );
                console.log(response.data.data);
                
                setCustomers(response.data.data);

            } catch (error) {
                console.error("Error fetching customer data:", error);
            }
        };

        fetchCustomers();
    }, []);

    return (
        <div className="content">
            <div className="topSection">
                <div className="topSection__left">
                    <h3 className="topSection__left--title">Customers</h3>
                </div>
                <div className="topSection__right">
                    <div className="filter-widget">
                        <p>Filter</p>
                        <span className="filter-widget__cover">
                            <i className="bi bi-filter filter-widget__cover"></i>
                        </span>
                    </div>
                    <div className="addBtn">
                        <Button variant="primary">Add Customer</Button>
                    </div>
                </div>
            </div>
            <div className="dataGrid">
                <CustomerTable data={customers} />
            </div>
            <ButtonGroup aria-label="Basic example">
                <Button variant="outline-secondary">Left</Button>
                <Button variant="outline-secondary">2</Button>
                <Button variant="outline-secondary">Right</Button>
            </ButtonGroup>
        </div>
    );
};

export default CustomerPage;
