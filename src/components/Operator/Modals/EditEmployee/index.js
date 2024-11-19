import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const EditEmployee = ({ show, onHide, employee }) => {
    const [formData, setFormData] = useState({
        employeeName: '',
        phoneNo: '',
        serviceAreaId: '',
        userName: '',
        password: '',
        isActive: true, // Map to backend's `isActive` field
        operatorId: '', // Backend-required field
    });

    // Populate formData when employee data is passed
    useEffect(() => {
        if (employee) {
            setFormData({
                employeeName: employee.employeeName || '',
                phoneNo: employee.phoneNo || '',
                serviceAreaId: employee.serviceAreaId || '',
                userName: employee.userName || '',
                password: '', // Leave empty unless explicitly required
                isActive: employee.status || true, // Convert status to isActive
                operatorId: employee.vendorId || sessionStorage.getItem('operatorId') || '',
            });
        }
    }, [employee]);

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
        if (!formData.employeeName || !formData.phoneNo || !formData.serviceAreaId || !formData.userName || !formData.operatorId) {
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
                `${process.env.REACT_APP_BASE_URL}/vendors-connect/api/employee/master/employee/employee/${employee.id}`,
                payload,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            if (response.status === 200) {
                alert('Employee updated successfully!');
                onHide(); // Close the modal after success
            } else {
                console.error('Unexpected response:', response);
                alert('Failed to update employee. Please try again.');
            }
        } catch (error) {
            console.error('Error response:', error.response?.data || error.message);
            if (error.response?.data?.errorlist) {
                alert(`Server validation error: ${Object.values(error.response.data.errorlist).flat().join(', ')}`);
            } else {
                alert('Error updating employee. Please try again.');
            }
        }
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Employee</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="employeeName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="employeeName"
                            value={formData.employeeName}
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
                    <Form.Group controlId="operatorId">
                        <Form.Label>Operator ID</Form.Label>
                        <Form.Control
                            type="text"
                            name="operatorId"
                            value={formData.operatorId}
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

export default EditEmployee;
