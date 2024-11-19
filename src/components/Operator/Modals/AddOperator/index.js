import React, { useEffect, useState } from 'react';
import './addOperator.scss';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';

const AddOperatorModal = ({ show, onHide, onSave }) => {
    // Validation schema
    const validation = Yup.object({
        name: Yup.string().required('Operator Name is required'),
        mobileNo: Yup.string().required('Mobile Number is required'),
        username: Yup.string().required('Username is required'),
        serviceArea: Yup.string().required('Service Area is required'),
        cableType: Yup.string().required('Cable Type is required'),
        emergencyMobileNo: Yup.string().nullable(),
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(validation),
    });

    const [loading, setLoading] = useState(false);

    // Reset form when operatorData changes
   

    // Submit handler
    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const token = sessionStorage.getItem('authToken'); // Retrieve token
            const url =`${process.env.REACT_APP_BASE_URL}/vendors-connect/api/admin/master/internetplans/internetplans`;

            const response = await axios.post(url, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
            });

            onSave(response.data); // Callback to update parent component
            onHide(); // Close the modal
        } catch (error) {
            console.error('Error saving operator:', error);
            alert('An error occurred while saving the operator. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal show={show} onHide={onHide} className="addOperator-modal">
            <Modal.Header closeButton>
                <Modal.Title>{'Add Operator'}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="addOperator-modal__body">
                <Form onSubmit={handleSubmit(onSubmit)} className="addOperator-modal__body__form">
                    {['name', 'mobileNo', 'emergencyMobileNo', 'serviceArea', 'username', 'cableType'].map((field) => (
                        <Form.Group key={field} className="mb-4 formGroup" controlId={field}>
                            <Form.Label className="formGroup--label">{field}</Form.Label>
                            <InputGroup className="mb-1 formGroup__inputGroup">
                                <Form.Control
                                    type="text"
                                    {...register(field)}
                                    placeholder={`Enter ${field}`}
                                />
                            </InputGroup>
                            <span className={`error ${errors[field] && 'visible'}`}>
                                {errors[field]?.message}
                            </span>
                        </Form.Group>
                    ))}
                    <div className="modal-buttons">
                        <Button variant="outline-primary" onClick={onHide} disabled={loading}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit" disabled={loading}>
                            {loading ? 'Saving...' : 'Save Changes'}
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default AddOperatorModal;
