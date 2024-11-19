import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const EditServiceAreaModal = ({ show, onHide, serviceArea, onSave }) => {
    const [formData, setFormData] = useState({
        serviceAreaName: '',
        pinCode: '',
    });

    // Populate formData when serviceArea is passed
    useEffect(() => {
        if (serviceArea) {
            setFormData({
                serviceAreaName: serviceArea.serviceAreaName || '',
                pinCode: serviceArea.pinCode || '',
            });
        }
    }, [serviceArea]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSave = async () => {
        const token = sessionStorage.getItem('authToken');

        // Validate required fields
        if (!formData.serviceAreaName || !formData.pinCode) {
            alert('Please fill in all required fields.');
            return;
        }

        const payload = { ...formData };
        console.log(serviceArea);
        

        try {
            const response = await axios.put(
                `${process.env.REACT_APP_BASE_URL}/vendors-connect/api/admin/master/serviceareas/serviceareas/${serviceArea.id}`,
                payload,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            if (response.status === 200) {
                alert('Service Area updated successfully!');
                onSave(formData); // Notify parent component of the update
                onHide(); // Close the modal after success
            } else {
                console.error('Unexpected response:', response);
                alert('Failed to update Service Area. Please try again.');
            }
        } catch (error) {
            console.error('Error response:', error.response?.data || error.message);
            alert('Error updating Service Area. Please try again.');
        }
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Service Area</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="serviceAreaName">
                        <Form.Label>Service Area Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="serviceAreaName"
                            value={formData.serviceAreaName}
                            onChange={handleChange}
                            placeholder="Enter Service Area Name"
                        />
                    </Form.Group>
                    <Form.Group controlId="pinCode">
                        <Form.Label>Pin Code</Form.Label>
                        <Form.Control
                            type="text"
                            name="pinCode"
                            value={formData.pinCode}
                            onChange={handleChange}
                            placeholder="Enter Pin Code"
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditServiceAreaModal;
