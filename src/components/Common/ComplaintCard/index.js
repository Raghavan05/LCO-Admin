import React from 'react'
import "./complaintCard.scss";

import Card from 'react-bootstrap/Card';

const complaintStatus = {
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
    const handleOpenModal = (status) => {
        props.showModal(status, props?.data)
    }
    
    return (
        <Card className='complaintCard' style={{ width: '20rem' }}>
            <Card.Header className='complaintCard__header'>
                <h5 className="complaintCard__header--title">{props.data?.allotedEmployee}</h5>
                <div className="complaintCard__header__status">
                    <p className={`complaintCard__header__status--${complaintStatus[props?.data?.status]}`}>{complaintStatus[props?.data?.status]}</p>
                </div>
            </Card.Header>
            <Card.Body className='complaintCard__body'>
                <Card.Text as={'p'} className='complaintCard__body--text'>{props?.data?.serviceArea}</Card.Text>
                <h6 className='complaintCard__body--anchor' onClick={handleOpenModal}>View Detail</h6>
            </Card.Body>
        </Card>
    )
}

export default Index