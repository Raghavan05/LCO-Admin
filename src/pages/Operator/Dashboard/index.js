import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
    // "Username",
    "Status",
    "Cable Type",
    "Actions",
];

const operatorsGrid = (data) => {
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
                                {res?.customerId}
                            </td>
                            <td className="tCell">
                                {res?.customerName}
                            </td>
                            <td className="tCell">
                                {res?.mobileNo}
                            </td>
                            <td className="tCell">
                                {res?.serviceAreaName}
                            </td>
                            {/* <td className="tCell">
                                {res?.email}
                            </td> */}
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
        const [customers, setCustomers] = useState([]);
        const [serviceAreas, setServiceAreas] = useState([]);
        const [customerIds, setCustomerIds] = useState([]); // New state to store all customer IDs
        const navigate = useNavigate();

        // Fetch profile data from backend
        useEffect(() => {
            const fetchCustomers = async () => {
                const token = sessionStorage.getItem('authToken'); // Retrieve token from sessionStorage

                try {
                    const customerResponse = await axios.get(
                        `${process.env.REACT_APP_BASE_URL}/vendors-connect/api/customer/master/customer/customer`,
                        {
                            headers: {
                                Authorization: `Bearer ${token}`
                            },  
                        }
                    );
                    const customerData = customerResponse.data.data;
                    console.log(customerData);
                    
                    setCustomers(customerData);
        
                    // Extracting and storing all customer IDs
                    const ids = customerData.map((customer) => customer.id);
                    setCustomerIds(ids); // Store the IDs in state for other use if needed
        
                    // Use the `ids` variable directly here
                    const ServiceAreasResponse = await axios.get(
                        `${process.env.REACT_APP_BASE_URL}/vendors-connect/api/admin/master/serviceareas/serviceareas/${ids}`,
                        {
                            headers: {
                                Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
                            },
                        }
                    );
        
                    console.log(ServiceAreasResponse.data.data);
                    setServiceAreas(ServiceAreasResponse.data.data);
                    
                } catch (error) {
                    console.error('Error fetching customer data:', error);
                }
            };
        
            fetchCustomers();
        }, []);
        
    
        const handleNavigate = (url) => {
            navigate(url);
        };

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
                        <div className="serviceCard" onClick={() => handleNavigate("/admin/installation")}>
                            <img src={Installation} alt="installationImg" width='130px'/>
                            <h5>Installation</h5>
                        </div>
                        <div className="serviceCard">
                            <img src={PaymentCard} alt="paymentImg" width='130px'/>
                            <h5>Payment</h5>

                        </div>
                        <div className="serviceCard" onClick={() => handleNavigate("/admin/complaints")}>
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
                    {operatorsGrid(customers)}
                </div>
            </div>
        </div>
    )
}

export default Index