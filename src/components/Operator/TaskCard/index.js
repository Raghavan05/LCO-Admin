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
    return (
        <Card className='taskCard' style={{ width: '20rem' }}>
            <Card.Header className='taskCard__header'>
                <h5 className="taskCard__header--title">{props.data?.allotedEmployee}</h5>
                <span className='taskCard__header__status'>
                    <p className={`taskCard__header__status--${taskStatus[props?.data?.status]}`}>{props?.data?.status}</p>
                </span>
            </Card.Header>
            <Card.Body className='taskCard__body'>
                <Card.Text as={'p'} className='taskCard__body--text'>{props?.data?.serviceArea}</Card.Text>
                <h6 className='taskCard__body--anchor'>View Detail</h6>
            </Card.Body>
        </Card>
    )
}

export default Index