import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {CreatePostForm} from "./CreatePostForm";


export const ModalCreatePost = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Create
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Let's Go!!</Modal.Title>
                </Modal.Header>
                <Modal.Body><CreatePostForm/></Modal.Body>
            </Modal>
        </>
    );
}