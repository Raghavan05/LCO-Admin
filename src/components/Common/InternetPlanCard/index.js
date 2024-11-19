import React, { useState } from 'react';
import './InternetPlanCard.scss';
import Card from 'react-bootstrap/Card';
import EditInternetPlan from '../../Operator/Modals/EditInternetPlan'; // Adjust the path as needed

const internetStatus = {
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
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handleOpenModal = (status) => {
        props.showModal(status, props?.data);
    };

    // Open the edit modal and pass selected data
    const handleEditClick = () => {
        setSelectedPlan(props?.data); // Pass the selected internet plan data
        setShowEditModal(true);
    };

    // Close the edit modal
    const handleCloseEditModal = () => {
        setShowEditModal(false);
    };

    return (
        <>
            <Card className='internetCard' style={{ width: '20rem' }}>
                <Card.Header className='complaintCard__header'>
                    <h5 className="complaintCard__header--title">
                        {"Plan : " + (props.index + 1)}
                    </h5>
                    <div className="complaintCard__header__status">
                        <p className={`complaintCard__header__status--${internetStatus[props?.data?.status]}`}>
                            {internetStatus[props?.data?.status]}
                        </p>
                    </div>
                </Card.Header>
                <Card.Body className='complaintCard__body'>
                    <Card.Text as={'p'} className='complaintCard__body--text'>
                        {props?.data?.name}
                    </Card.Text>
                    <div className="internetCard__actions" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h6 className='complaintCard__body--anchor' onClick={handleOpenModal}>
                            View Detail
                        </h6>
                        <h6 className='complaintCard__body--anchor' onClick={handleEditClick}>
                            Edit
                        </h6>
                    </div>
                </Card.Body>
            </Card>

            {/* Edit Modal */}
            {showEditModal && (
                <EditInternetPlan
                    show={showEditModal}
                    onHide={handleCloseEditModal}
                    internetPlan={selectedPlan}
                    onSave={(data) => console.log("Saved Data:", data)} // Example handler
                />
            )}
        </>
    );
};

export default Index;
