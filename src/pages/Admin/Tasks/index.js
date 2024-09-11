import React, { useState } from 'react'
import './tasks.scss';

import Button from "react-bootstrap/Button";

import TaskCard from "../../../components/Common/TaskCard";
import InstallationDetailModal from "../../../components/Common/Modals/InstallationDetailModal"

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
    const [openModal, setOpenModal] = useState(false);
    const [taskDetail, setTaskDetail] = useState({});

    const openTaskDetailModal = (status, data) => {
        setOpenModal(status);
        setTaskDetail(data)
    }

    return (
        <>
            <InstallationDetailModal show={openModal} data={taskDetail} onHide= {() => openTaskDetailModal(false, {})}/>
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
                    {TaskLst?.map((data, i) => { return( 
                        <TaskCard data={data} key={i} showModal={(status, data) => openTaskDetailModal(status, data)}/> 
                    )})}
                </div>
            </div>
        </>
    )
}

export default Index