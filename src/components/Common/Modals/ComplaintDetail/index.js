import React from 'react'
import "./complaintDetail.scss";

import Modal from 'react-bootstrap/Modal';

const Index = (props) => {
    return (
        <Modal {...props} animation={true} className='complaintDetail-modal'>
            <Modal.Header closeButton>
                <Modal.Title>Complaint Details</Modal.Title>
            </Modal.Header>
            <Modal.Body className='complaintDetail-modal__body'>
                <div className="complaintDetail-modal__body__content">
                    <div className="dataSection">
                        <p className='dataSection--title'>Created At</p>
                        <h5 className='dataSection--text'>15/08/2014, 12.00 AM</h5>
                    </div>
                    <hr />
                    <div className="dataSection">
                        <p className='dataSection--title'>Service Area</p>
                        <h5 className='dataSection--text'>14 B, North Street, D Bock, Los Angles</h5>
                    </div>
                    <hr />
                    <div className="dataSection">
                        <p className='dataSection--title'>Operator</p>
                        <h5 className='dataSection--text'>Mukesh</h5>
                    </div>
                    <hr />
                    <div className="dataSection">
                        <p className='dataSection--title'>Work started Date & Time</p>
                        <h5 className='dataSection--text'>16/08/2014, 2.00 AM</h5>
                    </div>
                    <hr />
                    <div className="dataSection">
                        <p className='dataSection--title'>Work end Date & Time</p>
                        <h5 className='dataSection--text'>16/08/2014, 6.00 AM</h5>
                    </div>
                    <hr />
                    <div className="dataSection">
                        <p className='dataSection--title'>Task Details</p>
                        <h5 className='dataSection--text'>Need to install setup box</h5>
                    </div>
                    <hr />
                    <div className="dataSection">
                        <p className='dataSection--title'>Status</p>
                        <h5 className='dataSection--text'>On Hold</h5>
                    </div>
                    <hr />
                    <div className="dataSection">
                        <p className='dataSection--title'>Reason</p>
                        <h5 className='dataSection--text'>Due to rain</h5>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default Index