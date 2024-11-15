import React from 'react'
import "./taskCard.scss";

import Card from 'react-bootstrap/Card';

const taskStatus = {
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
        <Card className='taskCard' style={{ width: '20rem' }}>
            <Card.Header className='taskCard__header'>
                <h5 className="taskCard__header--title">{"Installation: " + (props.index + 1)}
                </h5>
                <span className='taskCard__header__status'>
                    <p className={`taskCard__header__status--${taskStatus[props?.data?.status]}`}>{ props?.data?.statusId.slice(0, 5).split(" ").join(" ") + "..."}</p>
                </span>
            </Card.Header>
            <Card.Body className='taskCard__body'>
                <Card.Text as={'p'} className='taskCard__body--text'>{"Service Area Id : " + props?.data?.serviceAreaId}</Card.Text>
                <Card.Text as={'p'} className='taskCard__body--text'>{"Customer Id : " + props?.data?.customerId}</Card.Text>
                <Card.Text as={'p'} className='taskCard__body--text'>{"Employee Id : " + props?.data?.serviceAreaId}</Card.Text>
                <h6 className='taskCard__body--anchor' onClick={handleOpenModal}>View Detail</h6>
            </Card.Body>
        </Card>
    )
}

export default Index