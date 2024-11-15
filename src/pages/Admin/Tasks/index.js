import React, { useEffect, useState } from 'react'
import './tasks.scss';

import Button from "react-bootstrap/Button";

import TaskCard from "../../../components/Common/TaskCard";
import InstallationDetailModal from "../../../components/Common/Modals/InstallationDetailModal"
import axios from 'axios';

const TaskLst = [
    {
        status: "completed",
        serviceArea: "14 B, North Street, D Bock, Los Angles",
        allotedEmployee: "Mukesh",
        dateTime: "15/05/2007"

    },
    {
        status: "new",
        serviceArea: "14 B, North Street, D Bock, Los Angles",
        allotedEmployee: "Varun",
        dateTime: "15/05/2007"

    },
    {
        status: "stopped",
        serviceArea: "14 B, North Street, D Bock, Los Angles",
        allotedEmployee: "Aksah",
        dateTime: "15/05/2007"

    },
    {
        status: "ongoing",
        serviceArea: "14 B, North Street, D Bock, Los Angles",
        allotedEmployee: "Sangeeth",
        dateTime: "15/05/2007"

    },
    {
        status: "onHold",
        serviceArea: "14 B, South Street, New Delhi",
        allotedEmployee: "Subash",
        dateTime: "15/05/2007"

    },
    {
        status: "started",
        serviceArea: "14 B, North Street, D Bock, Los Vegas",
        allotedEmployee: "Rahul",
        dateTime: "15/05/2007"

    },
    {
        status: "employeeChanged",
        serviceArea: "14 B, North Street, D Bock, San Antonio",
        allotedEmployee: "Aneesh",
        dateTime: "15/05/2007"

    },
    {
        status: "allottedEmployee",
        serviceArea: "14 B, North Street, D Bock, San Antonio",
        allotedEmployee: "John",
        dateTime: "15/05/2007"

    },
    {
        status: "stopped",
        serviceArea: "14 B, North Street, D Bock, Los Angles",
        allotedEmployee: "Varun",
        dateTime: "15/05/2007"

    },
]

const Index = () => {
    const [installationDetails, setInstallationDetails] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [installation, setInstallation] = useState({});

    // Fetch data from the API
    useEffect(() => {
        const fetchInternetPlansDetails = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_BASE_URL}/vendors-connect/api/installation/master/installation/installation`,
                    {
                        headers: {
                            Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
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