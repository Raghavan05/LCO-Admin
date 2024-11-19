import React, { useState } from 'react';
import './CablePlanCard.scss';
import Card from 'react-bootstrap/Card';
import EditCablePlan from '../../Operator/Modals/EditCablePlan'; // Adjust the path as needed

const cableStatus = {
    new: "new",
    allottedEmployee: "alloted",
    employeeChanged: "changed",
    started: "started",
    ongoing: "ongoing",
    onHold: "onHold",
    stopped: 'stopped',
    completed: 'completed'
};

const Index = (props) => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handleOpenModal = (status) => {
        props.showModal(status, props?.data);
    };

    const handleEditClick = () => {
        setSelectedPlan(props?.data); // Pass the selected plan details
        setShowEditModal(true);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
    };

    return (
        <>
            <Card className='cableCard' style={{ width: '20rem' }}>
                <Card.Header className='complaintCard__header'>
                    <h5 className="complaintCard__header--title">
                        {"Plan : " + (props.index + 1)}
                    </h5>
                    <div className="complaintCard__header__status">
                        <p className={`complaintCard__header__status--${cableStatus[props?.data?.status]}`}>
                            {cableStatus[props?.data?.status]}
                        </p>
                    </div>
                </Card.Header>
                <Card.Body className='complaintCard__body'>
                    <Card.Text as={'p'} className='complaintCard__body--text'>
                        {props?.data?.name}
                    </Card.Text>
                    <div className="cableCard__actions" style={{ display: 'flex', justifyContent: 'space-between' }}>
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
                <EditCablePlan
                    show={showEditModal}
                    onHide={handleCloseEditModal}
                    cablePlan={selectedPlan}
                    onSave={(data) => console.log("Saved Data:", data)} // Example handler

                />
            )}
        </>
    );
};

export default Index;
