import React from 'react'
import "./InstallationDetail.scss";
import Modal from 'react-bootstrap/Modal';
import moment from 'moment';

const Index = (props) => {
    const { data } = props;

    const formatDate = (date) => moment(date).format('DD MMM YYYY').toLowerCase();

    return (
        <Modal {...props} animation={true} className='installationDetail-modal'>
            <Modal.Header closeButton>
                <Modal.Title>Installation Details</Modal.Title>
            </Modal.Header>
            <Modal.Body className='installationDetail-modal__body'>
                <div className="installationDetail-modal__body__content">
                {data?.id && (
                        <div className="dataSection">
                            <p className='dataSection--title'>ID</p>
                            <h5 className='dataSection--text'>{data.id}</h5>
                        </div>
                    )}
                    <hr />
                    {data?.customerId && (
                        <div className="dataSection">
                            <p className='dataSection--title'>Customer ID</p>
                            <h5 className='dataSection--text'>{data.customerId}</h5>
                        </div>
                    )}
                    <hr />
                    {data?.employeeId && (
                        <div className="dataSection">
                            <p className='dataSection--title'>Employee ID</p>
                            <h5 className='dataSection--text'>{data.employeeId}</h5>
                        </div>
                    )}
                    <hr />
                    {data?.statusId && (
                        <div className="dataSection">
                            <p className='dataSection--title'>Status ID</p>
                            <h5 className='dataSection--text'>{data.statusId}</h5>
                        </div>
                    )}
                    <hr />
                    {data?.vendorId && (
                        <div className="dataSection">
                            <p className='dataSection--title'>Vendor ID</p>
                            <h5 className='dataSection--text'>{data.vendorId}</h5>
                        </div>
                    )}
                    <hr />
                    {data?.serviceAreaId && (
                        <div className="dataSection">
                            <p className='dataSection--title'>Service Area ID</p>
                            <h5 className='dataSection--text'>{data.serviceAreaId}</h5>
                        </div>
                    )}
                    <hr />
{/*                     
                    {data?.name && (
                        <div className="dataSection">
                            <p className='dataSection--title'>Plan Name</p>
                            <h5 className='dataSection--text'>{data.name || 'Nil'}</h5>
                        </div>
                    )}
                    <hr /> */}
                    {/* {data?.createdAt && (
                        <div className="dataSection">
                            <p className='dataSection--title'>Created At</p>
                            <h5 className='dataSection--text'>
                                {formatDate(data.createdAt) || 'Nil'}
                            </h5>
                        </div>
                    )}
                    <hr /> */}
                    {/* {data?.updatedAt && (
                        <div className="dataSection">
                            <p className='dataSection--title'>Updated At</p>
                            <h5 className='dataSection--text'>
                                {formatDate(data.updatedAt) || 'Nil'}
                            </h5>
                        </div>
                    )}
                    <hr /> */}
                    {data?.complaintCreatedDate && (
                        <div className="dataSection">
                            <p className='dataSection--title'>Created At</p>
                            <h5 className='dataSection--text'>
                                {formatDate(data.complaintCreatedDate) || 'Nil'}
                            </h5>
                        </div>
                    )}
                    <hr />
                    {data?.workStartDate && (
                        <div className="dataSection">
                            <p className='dataSection--title'>Created At</p>
                            <h5 className='dataSection--text'>
                                {formatDate(data.workStartDate) || 'Nil'}
                            </h5>
                        </div>
                    )}
                    <hr />
                    {data?.reason && (
                        <div className="dataSection">
                            <p className='dataSection--title'>Task Details</p>
                            <h5 className='dataSection--text'>{data.reason || 'Nil'}</h5>
                        </div>
                    )}
                    <hr />
                    {data?.workEndDate && (
                        <div className="dataSection">
                            <p className='dataSection--title'>Created At</p>
                            <h5 className='dataSection--text'>
                                {formatDate(data.workEndDate) || 'Nil'}
                            </h5>
                        </div>
                    )}
                    <hr />
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default Index