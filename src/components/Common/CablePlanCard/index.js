import React from 'react'
import "./CablePlanCard.scss";

import Card from 'react-bootstrap/Card';

const cableStatus = {
    new: "new",
    allottedEmployee: "alloted", 
    employeeChanged: "changed",
    started: "started",
    ongoing: "ongoing",
    onHold: "onHold",
    stopped: 'stopped',
    completed: 'completed'
}

const Index = (props) => {
    console.log(props.index);
    
    const handleOpenModal = (status) => {
        props.showModal(status, props?.data)
    }
    
    return (
        <Card className='cableCard' style={{ width: '20rem' }}>
            <Card.Header className='complaintCard__header'>
                <h5 className="complaintCard__header--title">
                    {"Plan : " + (props.index + 1)}
                </h5>
                <div className="complaintCard__header__status">
                    <p className={`complaintCard__header__status--${cableStatus[props?.data?.status]}`}>{cableStatus[props?.data?.status]}</p>
                </div>
            </Card.Header>
            <Card.Body className='complaintCard__body'>
                <Card.Text as={'p'} className='complaintCard__body--text'>{props?.data?.name}</Card.Text>
                <h6 className='complaintCard__body--anchor' onClick={handleOpenModal}>View Detail</h6>
            </Card.Body>
        </Card>
    )
}

export default Index