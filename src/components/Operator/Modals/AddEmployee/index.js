import React from 'react'
import "./addEmployee.scss";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

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
    const onSubmit = (data) => {
        console.log(data, "--", errors);
        
    }
    return (
        <Modal {...props} animation={false} className='addEmployee-modal'>
            <Modal.Header closeButton>
                <Modal.Title>Add Employee</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="employeeRegisteration-Form" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-4 formGroup" controlId="name">
                        <Form.Label className="formGroup--label">Name</Form.Label>
                        <InputGroup className="mb-1 formGroup__inputGroup">
                            <Form.Control type="text" {...register("name")}
                            placeholder="Enter your Name" />
                        </InputGroup>
                        <span className={`error ${errors.name && 'visible'}`}>{errors?.name?.message}</span>
                    </Form.Group>
                    <Form.Group className="mb-4 formGroup" controlId="mobileNo">
                        <Form.Label className="formGroup--label">Mobile Number</Form.Label>
                        <InputGroup className="mb-1 formGroup__inputGroup">
                            <Form.Control type="mobileNo" placeholder="Mobile Number" {...register("mobileNo")}/>
                        </InputGroup>
                        <span className={`error ${errors.mobileNo && 'visible'}`}  >{errors?.mobileNo?.message}</span>
                    </Form.Group>
                    <div className="ctaSection">
                        <Button className="mt-3 btn-blue" variant="outline-primary">
                            Cancel
                        </Button>
                        <Button className="mt-3 btn-blue" variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default Index