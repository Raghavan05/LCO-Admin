import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./operators.scss";

import AddOperator from "../../../components/Operator/Modals/AddOperator";
import EditOperator from "../../../components/Operator/Modals/EditOperator";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Badge } from 'react-bootstrap';

const tHeadTitle = [
    "Id",
    "Name",
    "Mobile Number",
    "Service Area",
    "Username",
    "Status",
    "Actions",
];

const operatorsGrid = (data, openEditOperatorModal) => {
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
                        <td className="tCell">{res?.vendorName}</td>
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
                            {/* <Button variant="outline-secondary">Reset Password</Button> */}
                            <Button
                                variant="primary"
                                className="primary-btn"
                                onClick={() => openEditOperatorModal(res)}
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
    const [operators, setOperators] = useState([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedOperator, setSelectedOperator] = useState(null);

    // Fetch employee data
    useEffect(() => {
        const fetchOperators = async () => {
        const token = sessionStorage.getItem('authToken');
            
            try {
                const operatorResponse = await axios.get(
                    `${process.env.REACT_APP_BASE_URL}/vendors-connect/api/vendor/master/vendor/vendor`,
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );
                setOperators(operatorResponse.data.data);
            } catch (error) {
                console.error('Error fetching operator data:', error);
            }
        };
        fetchOperators();
    }, []);

    const openAddOperatorModal = () => {
        setIsAddModalOpen(true);
    };

    const closeAddOperatorModal = () => {
        setIsAddModalOpen(false);
    };

    const openEditOperatorModal = (operator) => {
        setSelectedOperator(operator); // Store the selected employee data
        setIsEditModalOpen(true); // Open the modal
    };

    const closeEditOperatorModal = () => {
        setSelectedOperator(null); // Clear the selected employee data
        setIsEditModalOpen(false); // Close the modal
    };

    return (
        <>
            <AddOperator show={isAddModalOpen} onHide={closeAddOperatorModal} />
            <EditOperator
                show={isEditModalOpen}
                onHide={closeEditOperatorModal}
                operator={selectedOperator} // Pass selected employee data to modal
            />
            <div className="operatorContent">
                <div className="topSection">
                    <div className="topSection__left">
                        <h3 className="topSection__left--title">Operators</h3>
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
                            onClick={openAddOperatorModal}
                        >
                            <i className="bi bi-plus"></i> Add
                        </Button>
                    </div>
                </div>
                <div className="dataGrid">
                    {operatorsGrid(operators, openEditOperatorModal)}
                </div>
            </div>
        </>
    );
};

export default Index;
