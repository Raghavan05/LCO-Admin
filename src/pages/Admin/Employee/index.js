import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./employees.scss";

import AddEmployee from "../../../components/Operator/Modals/AddEmployee";
import EditEmployee from "../../../components/Operator/Modals/EditEmployee";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Badge } from 'react-bootstrap';

const tHeadTitle = [
    "Id",
    "Name",
    "Vendor ID",
    "Mobile Number",
    "Service Area",
    "Username",
    "Status",
    "Actions",
];

const employeesGrid = (data, openEditEmployeeModal) => {
    return (
        <Table responsive hover striped>
            <thead className="tHead">
                <tr className="tRow">
                    {tHeadTitle?.map((title, i) => (
                        <th key={i}>
                            <h6>{title}</h6>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="tBody">
                {data?.map((res, i) => (
                    <tr className="tRow" key={i}>
                        <td className="tCell identifier">{res?.id}</td>
                        <td className="tCell">{res?.employeeName}</td>
                        <td className="tCell">{res?.vendorId}</td>
                        <td className="tCell">{res?.phoneNo}</td>
                        <td className="tCell">{res?.serviceAreaId}</td>
                        <td className="tCell">{res?.userName}</td>
                        <td className="tCell">
                            {res?.status === true ? (
                                <Badge className="pill" bg="success" pill>
                                    Active
                                </Badge>
                            ) : (
                                <Badge className="pill" bg="danger" pill>
                                    In Active
                                </Badge>
                            )}
                        </td>
                        <td className="tCell actionSec">
                            <Button
                                variant="primary"
                                className="primary-btn"
                                onClick={() => openEditEmployeeModal(res)}
                            >
                                <i className="bi bi-pencil"></i> Edit
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

const Index = () => {
    const [employees, setEmployees] = useState([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    // Fetch employee data
    useEffect(() => {
        const fetchEmployees = async () => {
            const token = sessionStorage.getItem('authToken')
            
            try {
                const employeeResponse = await axios.get(
                    `${process.env.REACT_APP_BASE_URL}/vendors-connect/api/employee/master/employee/employee`,
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );
                setEmployees(employeeResponse.data.data);
            } catch (error) {
                console.error('Error fetching employee data:', error);
            }
        };
        fetchEmployees();
    }, []);

    const openAddEmployeeModal = () => {
        setIsAddModalOpen(true);
    };

    const closeAddEmployeeModal = () => {
        setIsAddModalOpen(false);
    };

    const openEditEmployeeModal = (employee) => {
        setSelectedEmployee(employee); // Store the selected employee data
        setIsEditModalOpen(true); // Open the modal
    };

    const closeEditEmployeeModal = () => {
        setSelectedEmployee(null); // Clear the selected employee data
        setIsEditModalOpen(false); // Close the modal
    };

    return (
        <>
            <AddEmployee show={isAddModalOpen} onHide={closeAddEmployeeModal} />
            <EditEmployee
                show={isEditModalOpen}
                onHide={closeEditEmployeeModal}
                employee={selectedEmployee} // Pass selected employee data to modal
            />
            <div className="employeeContent">
                <div className="topSection">
                    <div className="topSection__left">
                        <h3 className="topSection__left--title">Employees</h3>
                    </div>
                    <div className="topSection__right">
                        <Button
                            variant="outline-primary"
                            className="filter-btn"
                        >
                            Filter <i className="bi bi-filter"></i>
                        </Button>
                        <Button
                            variant="primary"
                            className="primary-btn"
                            onClick={openAddEmployeeModal}
                        >
                            <i className="bi bi-plus"></i> Add
                        </Button>
                    </div>
                </div>
                <div className="dataGrid">
                    {employeesGrid(employees, openEditEmployeeModal)}
                </div>
            </div>
        </>
    );
};

export default Index;
