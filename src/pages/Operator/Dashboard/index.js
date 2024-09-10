import React from 'react'
import "./dashboard.scss";

import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import Installation from "../../../assets/img/installation.svg"
import PaymentCard from "../../../assets/img/payments.svg"
import complaintForm from "../../../assets/img/complaints.svg"
import Request from "../../../assets/img/request.svg"
import { Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const tHeadTitle = [
    "Id",
    "Name",
    "Mobile Number",
    "Service Area",
    "Username",
    "Status",
    "Cable Type",
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
                            <td className="tCell identifier">
                                {res?.id}
                            </td>
                            <td className="tCell">
                                {res?.name}
                            </td>
                            <td className="tCell">
                                {res?.phone}
                            </td>
                            <td className="tCell">
                                {res?.serviceArea}
                            </td>
                            <td className="tCell">
                                {res?.email}
                            </td>
                            <td className="tCell">
                                {res?.status === true ? 
                                    <Badge className='pill' bg='success' pill >Active</Badge> : 
                                    <Badge className='pill' bg='danger' pill >In Active</Badge>
                                }
                            </td>
                            <td className="tCell">
                                {res?.cableType}
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

const Index = (props) => {
    const navigate = useNavigate();

    const handleNavigate = (url) => {
        navigate(url)
    }

    return (
        <div className='dashContent'>
            <div className="dashContent--topSection">
                <h3 className="dashContent--topSection__title">
                    Dashboard
                </h3>
            </div>
            <div className="dashContent--bottomSection">
                <div className="dashContent--bottomSection__actionElements">
                    <div className="servicesSection">
                        <div className="serviceCard" onClick={() => handleNavigate("/operator/tasks")}>
                            <img src={Installation} alt="installationImg" width='130px'/>
                            <h5>Installation</h5>
                        </div>
                        <div className="serviceCard">
                            <img src={PaymentCard} alt="paymentImg" width='130px'/>
                            <h5>Payment</h5>

                        </div>
                        <div className="serviceCard" onClick={() => handleNavigate("/operator/complaints")}>
                            <img src={complaintForm} alt="complaintsImg" width='130px'/>
                            <h5>Complaints</h5>
                        </div>
                    </div>
                    <div className="requestSection">
                        <div className="requestCard">
                            <h4>General Request</h4>
                            <div className="requestCard--bottom">
                                <img src={Request} alt="requestImg" width="75px"/>
                                <p>Explore Requests from non linked Customers</p>
                            </div>
                            <div className="requestCard--cta">
                                <Button className='requestCard--cta__button' variant="primary">Explore</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashContent--bottomSection__dataGrid">
                    <span>
                        <h5 className='title'>Customers</h5>
                        <h6 className='cta'>View All</h6>
                    </span>
                    {operatorsGrid()}
                </div>
            </div>
        </div>
    )
}

export default Index