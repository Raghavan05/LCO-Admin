import React from 'react'

import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";

const Index = (props) => {
    const handleClose = () => {
        props.onHide();
    }

    return (
        <Modal {...props} animation={false}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            <Button variant="outline-primary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Index