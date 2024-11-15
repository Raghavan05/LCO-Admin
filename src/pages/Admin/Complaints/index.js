import React, { useEffect, useState } from 'react'
import './complaints.scss';

import ComplaintCard from "../../../components/Common/ComplaintCard";
import ComplaintDetail from "../../../components/Common/Modals/ComplaintDetail";
import axios from 'axios';

const complaintsLst = [
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
    const [complaintDetails, setComplaintDetails] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [complaint, setComplaint] = useState({});

    // Fetch data from the API
    useEffect(() => {
        const fetchInternetPlansDetails = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_BASE_URL}/vendors-connect/api/complaint/master/complaint/complaint`,
                    {
                        headers: {
                            Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
                        },
                    }
                );  
                console.log(response.data.data);
                setComplaintDetails(response.data.data);
            } catch (error) {
                console.error("Error fetching customer data:", error);
                // Optionally show an error state to the user
            }
        };

        fetchInternetPlansDetails();
    }, []);

    const openTaskDetailModal = (status, data) => {
        setOpenModal(status);
        setComplaint(data)
    }

    return (
        <>
            <ComplaintDetail show={openModal} data={complaint} onHide= {() => openTaskDetailModal(false, {})}/>
            <div className="content">
                <div className="topSection">
                    <div className="topSection--left">
                        <h3 className="topSection--left__title">
                            Complaints
                        </h3>
                    </div>
                    <div className="topSection--right">
                        <div className="filter-widget">
                            <p>Filter</p>
                            <span className="filter-widget__cover">
                                <i className="bi bi-filter filter-widget__cover"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="bottomSection">
                    {complaintDetails?.map((data, i) => { return( <ComplaintCard data={data} key={i} showModal={(status, data) => openTaskDetailModal(status, data)}/> )})}
                </div>
            </div>
        </>
    )
}

export default Index