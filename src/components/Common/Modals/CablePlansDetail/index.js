import React from 'react';
import "./CablePlansDetail.scss";
import Modal from 'react-bootstrap/Modal';
import moment from 'moment';

const Index = (props) => {
    const { data } = props;

    const formatDate = (date) => moment(date).format('DD MMM YYYY').toLowerCase();

    return (
        <Modal {...props} animation={true} className='complaintDetail-modal'>
            <Modal.Header closeButton>
                <Modal.Title>Cable Plan Details</Modal.Title>
            </Modal.Header>
            <Modal.Body className='complaintDetail-modal__body'>
                <div className="complaintDetail-modal__body__content">
                    {data?.id && (
                        <div className="dataSection">
                            <p className='dataSection--title'>ID</p>
                            <h5 className='dataSection--text'>{data.id}</h5>
                        </div>
                    )}
                    <hr />

                    {data?.name && (
                        <div className="dataSection">
                            <p className='dataSection--title'>Plan Name</p>
                            <h5 className='dataSection--text'>{data.name || 'Nil'}</h5>
                        </div>
                    )}
                    <hr />


                    {data?.createdAt && (
                        <div className="dataSection">
                            <p className='dataSection--title'>Created At</p>
                            <h5 className='dataSection--text'>
                                {formatDate(data.createdAt) || 'Nil'}
                            </h5>
                        </div>
                    )}
                    <hr />
                    {data?.updatedAt && (
                        <div className="dataSection">
                            <p className='dataSection--title'>Updated At</p>
                            <h5 className='dataSection--text'>
                                {formatDate(data.updatedAt) || 'Nil'}
                            </h5>
                        </div>
                    )}
                    <hr />

                    {/* {data?.serviceArea && (
                        <div className="dataSection">
                            <p className='dataSection--title'>Service Area</p>
                            <h5 className='dataSection--text'>{data.serviceArea || 'Nil'}</h5>
                        </div>
                    )}
                    <hr />

                    {data?.operator && (
                        <div className="dataSection">
                            <p className='dataSection--title'>Operator</p>
                            <h5 className='dataSection--text'>{data.operator || 'Nil'}</h5>
                        </div>
                    )}
                    <hr />

                    {data?.taskDetails && (
                        <div className="dataSection">
                            <p className='dataSection--title'>Task Details</p>
                            <h5 className='dataSection--text'>{data.taskDetails || 'Nil'}</h5>
                        </div>
                    )}
                    <hr />

                    {data?.status && (
                        <div className="dataSection">
                            <p className='dataSection--title'>Status</p>
                            <h5 className='dataSection--text'>{data.status || 'Nil'}</h5>
                        </div>
                    )}
                    <hr />

                    {data?.reason && (
                        <div className="dataSection">
                            <p className='dataSection--title'>Reason</p>
                            <h5 className='dataSection--text'>{data.reason || 'Nil'}</h5>
                        </div>
                    )} */}
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default Index;
