import React from 'react'
import './addOperator.scss';
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const validation = Yup.object({

})

const Index = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onSubmit",
        resolver: yupResolver(
            validation
        ),
    });

    const handleClose = () => {
        props.onHide();
    }

    return (
        <Modal {...props} className='addOperator-modal'>
            <Modal.Header closeButton>
                <Modal.Title>Add Operator</Modal.Title>
            </Modal.Header>
            <Modal.Body className='addOperator-modal__body'>
                <Form className="addOperator-modal__body__form" >
                    <Form.Group className="mb-4 formGroup" controlId="name">
                        <Form.Label className="formGroup--label">Operator Name</Form.Label>
                        <InputGroup className="mb-1 formGroup__inputGroup">
                            <Form.Control type="text" {...register("name")} placeholder="Enter Operator name" />
                        </InputGroup>
                        <span className={`error ${errors.name && 'visible'}`}>{errors?.name?.message}</span>
                    </Form.Group>
                    <Form.Group className="mb-4 formGroup" controlId="mobileNo">
                        <Form.Label className="formGroup--label">Mobile Number</Form.Label>
                        <InputGroup className="mb-1 formGroup__inputGroup">
                            <Form.Control type="text" {...register("mobileNo")} placeholder="Enter mobile number" />
                        </InputGroup>
                        <span className={`error ${errors.mobileNo && 'visible'}`}>{errors?.mobileNo?.message}</span>
                    </Form.Group>
                    <Form.Group className="mb-4 formGroup" controlId="emergencyMobileNo">
                        <Form.Label className="formGroup--label">Emergency Number (optional)</Form.Label>
                        <InputGroup className="mb-1 formGroup__inputGroup">
                            <Form.Control type="text" {...register("emergencyMobileNo")} placeholder="Enter an Emergency number" />
                        </InputGroup>
                        <span className={`error ${errors.emergencyMobileNo && 'visible'}`}>{errors?.emergencyMobileNo?.message}</span>
                    </Form.Group>
                    <Form.Group className="mb-4 formGroup" controlId="serviceArea">
                        <Form.Label className="formGroup--label">Service Area</Form.Label>
                        <InputGroup className="mb-1 formGroup__inputGroup">
                            <Form.Control type="text" {...register("serviceArea")} placeholder="Enter service area" />
                        </InputGroup>
                        <span className={`error ${errors.name && 'visible'}`}>{errors?.name?.message}</span>
                    </Form.Group>
                    <Form.Group className="mb-4 formGroup" controlId="username">
                        <Form.Label className="formGroup--label">User Name</Form.Label>
                        <InputGroup className="mb-1 formGroup__inputGroup">
                            <Form.Control type="text" {...register("username")} placeholder="Enter user name" />
                        </InputGroup>
                        <span className={`error ${errors.username && 'visible'}`}>{errors?.username?.message}</span>
                    </Form.Group>
                    <Form.Group className="mb-4 formGroup" controlId="cableType">
                        <Form.Label className="formGroup--label">Cable Type</Form.Label>
                        <InputGroup className="mb-1 formGroup__inputGroup">
                            <Form.Control type="text" {...register("cableType")} placeholder="Enter cable Type" />
                        </InputGroup>
                        <span className={`error ${errors.cableType && 'visible'}`}>{errors?.cableType?.message}</span>
                    </Form.Group>
                </Form>
            </Modal.Body>
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