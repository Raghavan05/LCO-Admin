import React, { useState } from 'react';
import './AddServiceArea.scss';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';

const AddServiceAreaModal = ({ show, onHide, onSave }) => {
    // Validation schema
    const validation = Yup.object({
        serviceAreaName: Yup.string().required('Service Area Name is required'),
        pinCode: Yup.number().required('Pincode is required').positive(),
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

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const token = sessionStorage.getItem('authToken'); // Retrieve token
            const url = `${process.env.REACT_APP_BASE_URL}/vendors-connect/api/admin/master/serviceareas/serviceareas`;

            const response = await axios.post(url, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            onSave(response.data.data); // Callback to update parent component
            console.log(response.data.data); // Callback to update parent component
            onHide(); // Close the modal
            reset(); // Reset form
            if(response.data.headers.statusCode === 200){
                // Show success alert and reload the page
                alert('Cable plan added successfully.');
                window.location.reload(); // Reload the page to refresh the data
            }
        } catch (error) {
            console.error('Error saving cable plan:', error);
            alert('An error occurred while saving the cable plan. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal show={show} onHide={onHide} className="addCablePlans-modal">
            <Modal.Header closeButton>
                <Modal.Title>Add Service Area Name</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group controlId="serviceAreaName" className="mb-3">
                        <Form.Label>Service Area Name</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                placeholder="Enter Service Area"
                                {...register('serviceAreaName')}
                            />
                        </InputGroup>
                        <span className="text-danger">{errors.serviceAreaName?.message}</span>
                    </Form.Group>
                    <Form.Group controlId="pinCode" className="mb-3">
                        <Form.Label>Pincode</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="number"
                                placeholder="Enter Pincode"
                                {...register('pinCode')}
                            />
                        </InputGroup>
                        <span className="text-danger">{errors.pinCode?.message}</span>
                    </Form.Group>
                    <div className="modal-buttons">
                        <Button variant="outline-secondary" onClick={onHide} disabled={loading}>
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

export default AddServiceAreaModal;
