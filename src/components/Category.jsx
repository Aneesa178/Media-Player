import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Category() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
           <Button variant="warning" onClick={handleShow}>
           <i class="fa-solid fa-pencil" ></i> Add New Category
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-pencil"></i> Add New Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form className='border border-secondary p-3'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <p>Fill the following details</p>
        <Form.Control type="email" placeholder="Enter Category Id" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter Category Name" />
        </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning">Add</Button>
        </Modal.Footer>
      </Modal>
        
        </>
    )
}

export default Category;