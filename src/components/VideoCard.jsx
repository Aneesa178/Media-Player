import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function VideoCard() {
    return (
        <>
             <Card style={{ width: '18rem' }} className='mt-5 mb-5'>
      <Card.Img variant="top" height="300px" src="https://upload.wikimedia.org/wikipedia/en/4/45/Kal_Ho_Naa_Ho.jpg" />
      
        <Card.Body>
            <div className='d-flex align-items-center justify-content-evenly'><h6>Video Caption</h6>
            <Button variant="danger" className='ms-5'>
            <i class="fa-solid fa-trash"></i>
            </Button>
            </div>
        </Card.Body>
        
        
    </Card>
        </>
    )
}

export default VideoCard