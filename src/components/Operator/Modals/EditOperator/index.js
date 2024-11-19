import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const EditOperator = ({ show, onHide, operator }) => {
    const [formData, setFormData] = useState({
        vendorName: '',
        phoneNo: '',
        emergencyPhoneNo: '',
        serviceAreaId: '',
        cableTypeId: '',
        userName: '',
        password: '',
        isActive: true, // Map to backend's `isActive` fiel
         // Backend-required field
    });

    // Populate formData when employee data is passed
    useEffect(() => {
        if (operator) {
            setFormData({
                vendorName: operator.vendorName || '',
                phoneNo: operator.phoneNo || '',
                emergencyPhoneNo: operator.emergencyPhoneNo || '',
                serviceAreaId: operator.serviceAreaId || '',
                cableTypeId: operator.cableTypeId || '',
                userName: operator.userName || '',
                password: '', // Leave empty unless explicitly required
                isActive: operator.status || true, // Convert status to isActive
            });
        }
    }, [operator]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSave = async () => {
        const token = sessionStorage.getItem('authToken');

        // Validate required fields
        if (!formData.vendorName || !formData.phoneNo || !formData.emergencyPhoneNo || !formData.serviceAreaId || !formData.userName || !formData.password || !formData.cableTypeId) {
            alert('Please fill in all required fields.');
            return;
        }

        const payload = { ...formData };

        // Remove password if not provided
        if (!payload.password) {
            delete payload.password;
        }

        try {
            const response = await axios.put(
                `${process.env.REACT_APP_BASE_URL}/vendors-connect/api/vendor/master/vendor/vendor/${operator.id}`,
                payload,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            if (response.status === 200) {
                alert('Operator updated successfully!');
                onHide(); // Close the modal after success
            } else {
                console.error('Unexpected response:', response);
                alert('Failed to update operator. Please try again.');
            }
        } catch (error) {
            console.error('Error response:', error.response?.data || error.message);
            if (error.response?.data?.errorlist) {
                alert(`Server validation error: ${Object.values(error.response.data.errorlist).flat().join(', ')}`);
            } else {
                alert('Error updating operator. Please try again.');
            }
        }
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Operator</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="vendorName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="vendorName"
                            value={formData.vendorName}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="phoneNo">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control
                            type="text"
                            name="phoneNo"
                            value={formData.phoneNo}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="emergencyPhoneNo">
                        <Form.Label>Emergency Mobile Number</Form.Label>
                        <Form.Control
                            type="text"
                            name="emergencyPhoneNo"
                            value={formData.emergencyPhoneNo}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="serviceAreaId">
                        <Form.Label>Service Area</Form.Label>
                        <Form.Control
                            type="text"
                            name="serviceAreaId"
                            value={formData.serviceAreaId}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="userName">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="capletypeId">
                        <Form.Label>Caple type ID</Form.Label>
                        <Form.Control
                            type="text"
                            name="capletypeId"
                            value={formData.cableTypeId}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="isActive">
                        <Form.Label>Status</Form.Label>
                        <Form.Check
                            type="checkbox"
                            name="isActive"
                            checked={formData.isActive}
                            onChange={handleChange}
                            label="Active"
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

export default EditOperator;
