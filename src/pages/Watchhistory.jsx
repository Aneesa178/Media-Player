import { Link } from "react-router-dom";
function Watchhistory() {
    return (
        <>
            <div className="container mt-5 d-flex justify-content-between align-item-center mb-5">
                <h4>Watch History</h4>
                <Link style={{color:"white",textDecoration:"none"}}to={'/home'}><i class="fa-solid fa-arrow-left me-2"></i>Back to Home</Link>
            </div>
            <table className="table container mt-5 mb-5">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Caption</th>
                        <th>URL</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>DDLJ</td>
                        <td>http://www.youtube.com/DDLJ/video/1</td>
                        <td>06/12/2023</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default Watchhistory;