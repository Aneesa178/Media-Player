import React, { useEffect } from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addCategory, deletecategory, getAllCategory, getVideoDetails, updatecategory } from "../services/allAPI";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VideoCard from "./VideoCard";
import {Row,Col} from "react-bootstrap";
function Category() {
  //states are created below
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [deleteCategoryItem, setDeleteCategory] = useState([])
  const [allCategory, setAllCategory] = useState([])
  const [category, setCategory] = useState({
    id: "",
    categoryName: "",
    allVideos: ""
  })
  const getCategoryFromDB = async () => {
    const response = await getAllCategory();
    const { data } = response;
    setAllCategory(data);
    console.log(allCategory);
  }
  useEffect(() => {
    getCategoryFromDB();
    // setDeleteCategory(false);
  }, [deleteCategoryItem])
  const deleteCategory = async (id) => {
    const result = await deletecategory(id)
    setDeleteCategory(result);
  }

  const uploadCategory = async () => {
    const { id, categoryName } = category;
    //destructuring
    if (!id || !categoryName) {
      toast.warning("Please fill the form completely")
    }
    else {
      const response = await addCategory(category);
      console.log(response);
      if (response.status === 201) {
        toast.success(`${response.data.categoryName} is successfully uploaded`);
        handleClose();
        getCategoryFromDB();
      }
      else {/*  */
        toast.error("Something went wrong");
      }
    }
  }
  const dragOver = (e) => {
    //to prevent page refresh ,by default onDragOver will do page refresh
    e.preventDefault();
    console.log("===Drag over===");
  }
  const videoDrop = async (e, id) => {
    console.log(`video card need to be placed in card with id ${id}`);
    const videoid = e.dataTransfer.getData('VideoId');
    console.log(`video with id ${videoid} need to be placed in category with id ${id}`);
    const response = await getVideoDetails(videoid);
    const { data } = response;
    console.log("Video Details");
    console.log(data);
    const selectedCategory = allCategory?.find((item) => item.id === id);
    console.log("selected category", selectedCategory);
    selectedCategory.allVideos.push(data);
    console.log("===Selected category with dragged video details===");
    console.log(selectedCategory);
    await updatecategory(id, selectedCategory)
    getCategoryFromDB();
    
  }


  return (
    <>
      <div>
        <Button className="btn btn-warning" onClick={handleShow}>Add New Category</Button>
      </div>
      {
        allCategory.length > 0 ?
          allCategory.map((item) => (
            <div className="d-grid" style={{ width: "167px" }} droppable onDragOver={(e) => dragOver(e)}
              onDrop={(e) => videoDrop(e, item.id)}>
              <div className="mt-3 border border-secondary rounded p-3">
                <div className="d-flex justify-content-between align-items-center">
                  <h6>{item.categoryName}</h6>
                  <button className="btn btn-danger" onClick={() => deleteCategory(item.id)}><i class="fa-solid fa-trash"></i></button>
                </div>
              </div>
              <Row>
                <Col sm={12}>
                  {
                    item.allVideos?.length > 0 ?
                    item.allVideos.map(video=>(<VideoCard displayVideo={video}/>))
                    :
                    <p>No item</p>
                  }
                </Col>
              </Row>
            </div>
          )) :
          <p>Nothing to display</p>

      }

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
              <Form.Control type="email" placeholder="Enter Category Id" onChange={(e) => setCategory({ ...category, id: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter Category Name" onChange={(e) => setCategory({ ...category, categoryName: e.target.value })} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={uploadCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}></ToastContainer>

    </>
  )
}

export default Category;