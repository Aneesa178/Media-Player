import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VideoCard from './VideoCard';
import { getAllVideos } from '../services/allAPI';
import { useEffect } from 'react';


function View({uploadVideoStatus}) {
    const [allvideo, setAllVideo] = useState([])
    const [deleteVideoStatus,setDeleteVideoStatus]=useState(false)
    const getAllVideoFromDB = async () => {
        const response = await getAllVideos();
        const { data } = response;
        console.log(response);
        setAllVideo(data);
    }
    useEffect(() => {
        getAllVideoFromDB();
    }, [uploadVideoStatus,deleteVideoStatus])  //uploadVideoStatus passed as dependency here
    return (
        <>
            <Row>{
                allvideo.length > 0 ?
                    allvideo.map((video) => (
                        <Col sm={12} md={6} lg={4} x1={3}>
                            <VideoCard  displayVideo={video} setDeleteVideoStatus={setDeleteVideoStatus}/>
                        </Col>
                    ))
                    :
                    <p>Nothing to display</p>
            }
            </Row>
        </>
    )
}

export default View

