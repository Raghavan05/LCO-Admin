import React, { useState } from 'react';
import './AddInternetPlans.scss';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';

const AddInternetPlansModal = ({ show, onHide, onSave }) => {
    // Validation schema
    const validation = Yup.object({
        internetPlanName: Yup.string().required('Internet Plan Name is required'),
        // price: Yup.number().required('Price is required').positive(),
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
            const url = `${process.env.REACT_APP_BASE_URL}/vendors-connect/api/admin/master/internetplans/internetplans`;

            const response = await axios.post(url, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            onSave(response.data.data); // Callback to update parent component
            console.log(response.data.data); // Callback to update parent component
            onHide(); // Close the modal
            reset(); // Reset form
        } catch (error) {
            console.error('Error saving internet plan:', error);
            alert('An error occurred while saving the internet plan. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal show={show} onHide={onHide} className="addInternetPlans-modal">
            <Modal.Header closeButton>
                <Modal.Title>Add Internet Plan</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group controlId="internetPlanName" className="mb-3">
                        <Form.Label>Plan Name</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                placeholder="Enter Plan Name"
                                {...register('internetPlanName')}
                            />
                        </InputGroup>
                        <span className="text-danger">{errors.internetPlanName?.message}</span>
                    </Form.Group>
                    {/* <Form.Group controlId="price" className="mb-3">
                        <Form.Label>Price</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="number"
                                placeholder="Enter Price"
                                {...register('price')}
                            />
                        </InputGroup>
                        <span className="text-danger">{errors.price?.message}</span>
                    </Form.Group> */}
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

export default AddInternetPlansModal;
