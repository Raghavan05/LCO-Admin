import React, { useState, useEffect } from 'react'; 
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const EditInternetPlansModal = ({ show, onHide, internetPlan, onSave }) => {
    const [formData, setFormData] = useState({
        internetPlanName: '', // Plan name field
    });

    // Populate formData when internetPlan is passed
    useEffect(() => {
        if (internetPlan) {
            setFormData({
                internetPlanName: internetPlan.name || '', // Defaulting to empty string if no name is found
            });
        }
    }, [internetPlan]);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value, // Dynamically update the corresponding field in formData
        });
    };

    // Handle save button click
    const handleSave = async () => {
        const token = sessionStorage.getItem('authToken');

        // Validate required fields
        if (!formData.internetPlanName) {
            alert('Please enter the plan name.');
            return;
        }

        // Prepare payload for the update request
        const payload = { internetPlanName: formData.internetPlanName }; // Only send the name for now

        try {
            const response = await axios.put(
                `${process.env.REACT_APP_BASE_URL}/vendors-connect/api/admin/master/internetplans/internetplans/${internetPlan.id}`,
                payload,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            if (response.status === 200) {
                alert('Internet Plan updated successfully!');
                onSave(formData); // Notify parent component of the update
                onHide(); // Close the modal after success
            } else {
                console.error('Unexpected response:', response);
                alert('Failed to update Internet Plan. Please try again.');
            }
        } catch (error) {
            console.error('Error response:', error.response?.data || error.message);
            alert('Error updating Internet Plan. Please try again.');
        }
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Internet Plan</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="planName">
                        <Form.Label>Plan Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="internetPlanName"  // Corrected to match formData field name
                            value={formData.internetPlanName}
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

export default EditInternetPlansModal;
