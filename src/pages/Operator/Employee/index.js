import React, { useState } from "react";
import "./employee.scss";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import AddEmployee from "../../../components/Operator/Modals/AddEmployee";

const tHeadTitle = [
    "Id",
    "Name",
    "Mobile Number",
    "Username",
    "Status",
    "Actions",
];

const data = [
	{
		"id": "EB85CBC2",
		"name": "Murphy",
		"phone": "1-661-449-4115",
		"serviceArea": "Hospet",
		"email": "murphy@yahoo.couk",
		"status": false,
		"cableType": "Cable"
	},
	{
		"id": "E9944167",
		"name": "Lamar",
		"phone": "1-813-723-0727",
		"serviceArea": "Pondicherry",
		"email": "lamar@hotmail.org",
		"status": true,
		"cableType": "Internet"
	},
	{
		"id": "1FBFF340",
		"name": "Burke",
		"phone": "1-323-342-8782",
		"serviceArea": "Silvassa",
		"email": "burke@google.org",
		"status": true,
		"cableType": "Internet"
	},
	{
		"id": "4CD4B3C9",
		"name": "Melinda",
		"phone": "1-141-632-3578",
		"serviceArea": "Bhubaneswar",
		"email": "melinda@outlook.com",
		"status": true,
		"cableType": "Cable"
	},
	{
		"id": "F67870C9",
		"name": "Joseph",
		"phone": "1-774-499-6540",
		"serviceArea": "Guwahati",
		"email": "joseph@outlook.ca",
		"status": false,
		"cableType": "OTT"
	},
	{
		"id": "F67870D9",
		"name": "Richis",
		"phone": "1-774-499-6540",
		"serviceArea": "Guwahati",
		"email": "richis@outlook.ca",
		"status": true,
		"cableType": "OTT"
	},
	{
		"id": "F67870E9",
		"name": "Steffi",
		"phone": "1-774-499-6540",
		"serviceArea": "Guwahati",
		"email": "steffi@outlook.ca",
		"status": false,
		"cableType": "Cable"
	},
	{
		"id": "F67870T9",
		"name": "Kewin",
		"phone": "1-774-499-6540",
		"serviceArea": "Guwahati",
		"email": "kewin@outlook.ca",
		"status": false,
		"cableType": "OTT"
	},
	{
		"id": "F67876R9",
		"name": "Stew",
		"phone": "1-774-499-6540",
		"serviceArea": "Guwahati",
		"email": "stew@outlook.ca",
		"status": true,
		"cableType": "Internet"
	}
]

const operatorsGrid = () => {
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
                {data?.map((res, i) => {
                    return(
                        <tr className="tRow" key={i}>
                            <td className="tCell" key={i}>
                                {res?.id}
                            </td>
                            <td className="tCell" key={i}>
                                {res?.name}
                            </td>
                            <td className="tCell" key={i}>
                                {res?.phone}
                            </td>
                            <td className="tCell" key={i}>
                                {res?.email}
                            </td>
                            <td className="tCell" key={i}>
                                {res?.status === true ? 'Active' : "In Active"}
                            </td>
                            <td className="tCell actionSec">
                                <Button variant="outline-secondary">Reset Password</Button>
                                <a href="">
                                    Details
                                </a>
                            </td>
                        </tr>
                    )
                })}
                
                
            </tbody>
        </Table>
    );
};

const Index = () => {
    const [openModal, setOpenModal] = useState(false);

    const openAddEmployeeModal = (status) => {
        setOpenModal(status);
    }

    return (
        <>
            {/* <AddOperator show={openModal} onHide= {() => openAddOperatorModal(false)}/> */}
            { <AddEmployee show={openModal} onHide= {() => openAddEmployeeModal(false)}/>}
            <div className="employee">
                <div className="topSection">
                    <div className="topSection__left">
                        <h3 className="topSection__left--title">Employees</h3>
                    </div>
                    <div className="topSection__right">
                        <Button variant="outline-primary" className="filter-btn">
                            Filter <i className="bi bi-filter"></i>
                        </Button>
                        <Button variant="primary" className="primary-btn" onClick={() => openAddEmployeeModal(true)}>
                            <i className="bi bi-plus"></i> Add
                        </Button>
                    </div>
                </div>
                <div className="dataGrid">{operatorsGrid()}</div>
            </div>
        </>
    );
};

export default Index;
