import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const EditCablePlansModal = ({ show, onHide, cablePlan, onSave }) => {
    const [formData, setFormData] = useState({
        planName: '',
    });
    console.log(cablePlan);
    

    // Populate formData when cablePlan is passed
    useEffect(() => {
        if (cablePlan) {
            setFormData({
                planName: cablePlan.name || '',
            });
        }
    }, [cablePlan]);

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
        if (!formData.planName) {
            alert('Please enter the plan name.');
            return;
        }

        const payload = { ...formData };

        try {
            const response = await axios.put(
                `${process.env.REACT_APP_BASE_URL}/vendors-connect/api/admin/master/cableplans/cableplans/${cablePlan.id}`,
                payload,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            if (response.status === 200) {
                alert('Cable Plan updated successfully!');
                onSave(formData); // Notify parent component of the update
                onHide(); // Close the modal after success
            } else {
                console.error('Unexpected response:', response);
                alert('Failed to update Cable Plan. Please try again.');
            }
        } catch (error) {
            console.error('Error response:', error.response?.data || error.message);
            alert('Error updating Cable Plan. Please try again.');
        }
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Cable Plan</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="planName">
                        <Form.Label>Plan Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="planName"
                            value={formData.planName}
                            onChange={handleChange}
                            placeholder="Enter Plan Name"
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

export default EditCablePlansModal;
