import React, { useEffect, useState } from 'react'
import './tasks.scss';

import Button from "react-bootstrap/Button";

import TaskCard from "../../../components/Common/TaskCard";
import InstallationDetailModal from "../../../components/Common/Modals/InstallationDetailModal"
import axios from 'axios';

const Index = () => {
    const [installationDetails, setInstallationDetails] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [installation, setInstallation] = useState({});

    // Fetch data from the API
    useEffect(() => {
        const fetchInternetPlansDetails = async () => {
            const token = sessionStorage.getItem('authToken'); // Retrieve token from sessionStorage

            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_BASE_URL}/vendors-connect/api/installation/master/installation/installation`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );  
                console.log(response.data.data);
                setInstallationDetails(response.data.data);
            } catch (error) {
                console.error("Error fetching customer data:", error);
                // Optionally show an error state to the user
            }
        };

        fetchInternetPlansDetails();
    }, []);
    const openTaskDetailModal = (status, data) => {
        setOpenModal(status);
        setInstallation(data)
    }

    return (
        <>
            <InstallationDetailModal show={openModal} data={installation} onHide= {() => openTaskDetailModal(false, {})}/>
            <div className="taskContent">
                <div className="topSection">
                    <div className="topSection--left">
                        <h3 className="topSection--left__title">
                            Installation
                        </h3>
                    </div>
                    <div className="topSection--right">
                        <Button variant="outline-primary" className="filter-btn">
                            <p>Filter</p>
                            <i className="bi bi-filter"></i>
                        </Button>
                    </div>
                </div>
                <div className="bottomSection">
                    {installationDetails?.map((data, index) => { return( 
                        <TaskCard data={data} key={index} showModal={(status, data) => openTaskDetailModal(status, data)}/> 
                    )})}
                </div>
            </div>
        </>
    )
}

export default Index