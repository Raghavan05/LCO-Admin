import React, { } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";
import "./Login.scss";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";

const validation = Yup.object({
	username: Yup.string().trim().required("*Required").min(2, "Minimum 2 characters required").max(50, "Maximum 50 characters Allowed").nullable(),
	password: Yup.string()
    .required('Password is required')
    .min(4, 'Password must be at least 4 characters long')
    .max(30, 'Password cannot exceed 30 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[!@#$%^&*()]/, 'Password must contain at least one special character')
})

const Index = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onSubmit",
        resolver: yupResolver(
            validation
        ),
    });
    
    const onSubmit = (data) => {
        navigate("/admin/dashboard")
    }

    return (
        <div className="container authPage">
            <Card className="signInSec">
                <div className="signInSec--left">
                    <h2> ICable</h2>
                </div>
                <Card.Body className="signInSec-body">
                    <div className="signInSec-body--right">
                        <div className="signInTop">
                            <h3>Sign in</h3>
                        </div>
                        <Form className="signIn-form" onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-4 formGroup" controlId="username">
                                <Form.Label className="formGroup--label">Username</Form.Label>
                                <InputGroup className="mb-1 formGroup__inputGroup">
                                    <InputGroup.Text id="basic-addon1"><i className="bi bi-person"></i></InputGroup.Text>
                                    <Form.Control type="text" {...register("username")}
                                    placeholder="Enter your username" />
                                </InputGroup>
                                <span className={`error ${errors.username && 'visible'}`}>{errors?.username?.message}</span>
                            </Form.Group>
                            <Form.Group className="mb-4 formGroup" controlId="password">
                                <Form.Label className="formGroup--label">Password</Form.Label>
                                <InputGroup className="mb-1 formGroup__inputGroup">
                                    <InputGroup.Text id="basic-addon1"><i className="bi bi-key"></i></InputGroup.Text>
                                    <Form.Control type="password" placeholder="Password" {...register("password")}/>
                                </InputGroup>
                                <span className={`error ${errors.password && 'visible'}`}  >{errors?.password?.message}</span>
                            </Form.Group>
                            <Button className="mt-3 btn-blue" variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Card.Body>
            </Card>
            ;
        </div>
    );
};

export default Index;
