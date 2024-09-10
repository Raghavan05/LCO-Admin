import React from 'react'
import "./complaints.scss";

import ComplaintCard from "../../../components/Operator/ComplaintCard";

const complaintsLst = [
    {
        status: "new",
        serviceArea: "14 B, North Street, D Bock, Los Angles",
        allotedEmployee: "Mukesh",
        dateTime: "15/05/2007"

    },
    {
        status: "old",
        serviceArea: "14 B, North Street, D Bock, Los Angles",
        allotedEmployee: "Varun",
        dateTime: "15/05/2007"

    },
    {
        status: "In Progress",
        serviceArea: "14 B, North Street, D Bock, Los Angles",
        allotedEmployee: "Sangeeth",
        dateTime: "15/05/2007"

    },
    {
        status: "complete",
        serviceArea: "14 B, South Street, New Delhi",
        allotedEmployee: "Subash",
        dateTime: "15/05/2007"

    },
    {
        status: "complete",
        serviceArea: "14 B, North Street, D Bock, Los Vegas",
        allotedEmployee: "Rahul",
        dateTime: "15/05/2007"

    },
    {
        status: "complete",
        serviceArea: "14 B, North Street, D Bock, San Antonio",
        allotedEmployee: "Aneesh",
        dateTime: "15/05/2007"

    },
]

const Index = () => {
    return (
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
                {complaintsLst?.map((data, i) => { return( <ComplaintCard data={data} key={i}/> )})}
            </div>
        </div>
    )
}

export default Index