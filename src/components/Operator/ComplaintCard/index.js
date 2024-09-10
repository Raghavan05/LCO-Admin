import React from 'react'
import "./complaintCard.scss";

import Card from 'react-bootstrap/Card';

const Index = (props) => {
    console.log(props?.data);
    
    return (
        <Card className='complaintCard' border="primary" style={{ width: '20rem' }}>
            <Card.Header className='complaintCard__header'>
                <h5 className="complaintCard__header--title">{props.data?.allotedEmployee}</h5>
                <p className="complaintCard__header--status">{props?.data?.status}</p>
            </Card.Header>
            <Card.Body className='complaintCard__body'>
                <Card.Text as={'p'} className='complaintCard__body--text'>{props?.data?.serviceArea}</Card.Text>
                <h6 className='complaintCard__body--anchor'>View Detail</h6>
            </Card.Body>
        </Card>
    )
}

export default Index