import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import axios from 'axios';

// const user_id = response.data.user_id;
// const user_id = sessionStorage.getItem('user_id');
export default function StudentLoginPage() {
    // const [user_id, setUser_id] = useState('');
    const navigate = useNavigate();
    // useEffect(() => {
      const user_id = sessionStorage.getItem('user_id');
    //   if (storedUser_id) {
    //     setUser_id(storedUser_id);
    //   }
    // }, []);

const logoutUser = async () => {
    await axios.post(`http://localhost:5000/logout`);
    navigate("/");
  };

const [selectedFile, setSelectedFile] = useState(null);
const [message, setMessage] = useState('');

const handleFileChange = (e) => {
  setSelectedFile(e.target.files[0]);
};

const handleUpload = async () => {
  if (selectedFile) {
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post(`http://127.0.0.1:5000/api/upload/${user_id}`, formData);
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
    }
  }
};

//   const viewAttendanceReport = () => {
//     axios.get('http://127.0.0.1:5000/attendance-report')
//       .then((response) => {
//         console.log(response.data);
//         setAttendanceReport(response.data);
//         // Handle the attendance report data if needed
//       })
//       .catch((error) => {
//         console.log(error);
//         // Handle error if needed
//       });
//   };

  return (
    <div>
      <h2>Student Login Page</h2>
      <div>
      <div className="mb-4">
                  <input type="file" className="image" name="photo_url" onChange={handleFileChange} />
                  <button onClick={handleUpload}>Upload</button>
                  <p>{message}</p>
                  </div>
      <div className="mb-4">
                  <input type="file" className="image" name="photo_url" onChange={handleFileChange} />
                  <button onClick={handleUpload}>Upload</button>
                  <p>{message}</p>
                  </div>
      <div className="mb-4">
                  <input type="file" className="image" name="photo_url" onChange={handleFileChange} />
                  <button onClick={handleUpload}>Upload</button>
                  <p>{message}</p>
                  </div>
        {/* <h4>Upload Photos</h4>
        <input type="file" multiple onChange={handlePhotosChange} accept="image/png, image/jpeg" />
        <button onClick={uploadPhotos}>Upload Photos</button> */}
      </div>
      <button onClick={logoutUser}>Logout</button>
      {/* <div>
        <h4>View Attendance Report</h4>
        <button onClick={viewAttendanceReport}>View Report</button>
        {attendanceReport && (
          <div>
            <p>Attendance Report:</p>
            <pre>{JSON.stringify(attendanceReport, null, 2)}</pre>
          </div>
        )}
      </div> */}
    </div>
  );
}
