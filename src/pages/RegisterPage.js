import React, { useState } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

export default function RegisterPage(){

    const [name,setName] = useState('');
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [role,setRole] = useState('');
    const [classid,setClassid] = useState('');
    const [rollid,setRollid] = useState('');
    const [password,setPassword] = useState('');

    const navigate = useNavigate();

    const registerUser = () => {
        axios.post('http://127.0.0.1:5000/signup', {
            name: name,
            username: username,
            email: email,
            role: role,
            classid: classid,
            rollid: rollid,
            password: password
        })
        .then(function (response) {
             const user_id = response.data.id;
             sessionStorage.setItem('user_id', user_id);
             console.log(response);
            navigate("/");
        })
        .catch(function (error) {
            console.log(error, 'error');
            if (error.response.status === 401) {
                alert("Invalid credentials");
            }
        });
    };

    let imgs = [
      'https://as2.ftcdn.net/v2/jpg/03/39/70/91/1000_F_339709132_H9HSSTtTmayePcbARkTSB2qoZTubJ6bR.jpg',
    ];

  return (
    <div>
        <div className="container h-100">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form>
                  <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <p className="lead fw-normal mb-0 me-3">Create Your Account</p>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="form3Example3" className="form-control form-control-lg" placeholder="Enter Name" />
                    <label className="form-label" for="form3Example3">Name</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="form3Example3" className="form-control form-control-lg" placeholder="Enter username" />
                    <label className="form-label" for="form3Example3">Username</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="form3Example3" className="form-control form-control-lg" placeholder="Enter a valid email address" />
                    <label className="form-label" for="form3Example3">Email address</label>
                  </div>

                  <div className="form-outline mb-4">
                     <select value={role} onChange={(e) => setRole(e.target.value)} className="form-select form-select-lg" aria-label="Select Role">
                       <option value="">Select Role</option>
                       <option value="student">Student</option>
                       <option value="teacher">Teacher</option>
                     </select>
                     <label className="form-label" for="form3Example3">Role</label>
                   </div>

                  {/* <div className="form-outline mb-4">
                    <input type="text" value={role} onChange={(e) => setRole(e.target.value)} id="form3Example3" className="form-control form-control-lg" placeholder="Enter Role" />
                    <label className="form-label" for="form3Example3">Role</label>
                  </div> */}

                  {/* <div className="form-outline mb-4">
                    <input type="text" value={classid} onChange={(e) => setClassid(e.target.value)} id="form3Example3" className="form-control form-control-lg" placeholder="Enter Class" />
                    <label className="form-label" for="form3Example3">Class</label>
                  </div> */}

                  <div className="form-outline mb-4">
                     <select value={classid} onChange={(e) => setClassid(e.target.value)} className="form-select form-select-lg" aria-label="Select Class">
                       <option value="">Select Class</option>
                       <option value="CSA">CSA</option>
                       <option value="CSB">CSB</option>
                       <option value="ECA">ECA</option>
                       <option value="ECB">ECB</option>
                       <option value="EEE">EEE</option>
                     </select>
                     <label className="form-label" for="form3Example3">Class</label>
                   </div>

                  <div className="form-outline mb-4">
                    <input type="text" value={rollid} onChange={(e) => setRollid(e.target.value)} id="form3Example3" className="form-control form-control-lg" placeholder="Enter RollID" />
                    <label className="form-label" for="form3Example3">RollID</label>
                  </div>

                  <div className="form-outline mb-3">
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="form3Example4" className="form-control form-control-lg" placeholder="Enter password" />
                    <label className="form-label" for="form3Example4">Password</label>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">
                      <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                      <label className="form-check-label" for="form2Example3">
                        Remember me
                      </label>
                    </div>
                    <a href="#!" className="text-body">Forgot password?</a>
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="button" className="btn btn-primary btn-lg" onClick={() => registerUser()} >Sign Up</button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">Login to your account <a href="/login" className="link-danger">Login</a></p>
                  </div>

                </form>
              </div>
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img src={imgs[0]} className="img-fluid"/>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

// import React, { useState } from "react";
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";

// export default function RegisterPage() {
//   const [name, setName] = useState('');
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [role, setRole] = useState('');
//   const [classid, setClassid] = useState('');
//   const [rollid, setRollid] = useState('');
//   const [password, setPassword] = useState('');
//   // const [selectedPhotos, setSelectedPhotos] = useState([]);
//   const navigate = useNavigate();
//   const array = [];

//   const registerUser = () => {
//     // Create a new FormData object
//     const formData = new FormData();
//     // Append form data fields
//     formData.append('name', name);
//     formData.append('username', username);
//     formData.append('email', email);
//     formData.append('role', role);
//     formData.append('classid', classid);
//     formData.append('rollid', rollid);
//     formData.append('password', password);

//     // Append each selected photo to the FormData object
//     // selectedPhotos.forEach((photo, index) => {
//     //   formData.append('photos', photo);
//     // });

//     // Send the FormData object to the server
//     axios.post('http://127.0.0.1:5000/signup', formData)
//       .then(function (response) {
//         console.log(response);
//         navigate("/");
//       })
//       .catch(function (error) {
//         console.log(error, 'error');
//         if (error.response.status === 401) {
//           alert("Invalid credentials");
//         }
//       });
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     console.log("Error");
  
//       if (role === 'student') {
//         // Show the div for uploading photos
//         // Implement the logic for uploading photos here
//         // alert('Please upload 3 photos with 120x165 px dimensions and .png format.');
//         registerUser();
//       } else if (role === 'teacher') {
//         // Continue with the registration process for teachers
//         registerUser();
//       }
    
//   };

//   const [selectedFile, setSelectedFile] = useState(null);
//   const [message, setMessage] = useState('');

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (selectedFile) {
//       const formData = new FormData();
//       formData.append('file', selectedFile);

//       try {
//         const response = await axios.post('http://127.0.0.1:5000/api/upload', formData);
//         setMessage(response.data.message);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };

//   const [selectedFile1, setSelectedFile1] = useState(null);
//   const [message1, setMessage1] = useState('');

//   const handleFileChange1 = (e) => {
//     setSelectedFile1(e.target.files[0]);
//   };

//   const handleUpload1 = async () => {
//     if (selectedFile1) {
//       const formData = new FormData();
//       formData.append('file', selectedFile1);

//       try {
//         const response = await axios.post('/api/upload1', formData);
//         setMessage1(response.data.message1);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };

//   const [selectedFile2, setSelectedFile2] = useState(null);
//   const [message2, setMessage2] = useState('');

//   const handleFileChange2 = (e) => {
//     setSelectedFile2(e.target.files[0]);
//   };

//   const handleUpload2 = async () => {
//     if (selectedFile2) {
//       const formData = new FormData();
//       formData.append('file', selectedFile2);

//       try {
//         const response = await axios.post('/api/upload2', formData);
//         setMessage2(response.data.message2);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };
//   // const handleChangePhotos = (event) => {
//   //   console.log(event.target.files[0]);
//   //   const files = event.target.files[0];
//   //   // const selectedPhotos = [];
//   //   array.push(files[0]);
//   //   if (array.length == 3){
//   //     setSelectedPhotos(array);
//   //   }

//     // Iterate over the selected files and perform any necessary validations
    
//       // const file = files;
//       // for (let i = 0; i < files.length; i++) {
//         // const file = files;
//       // Perform additional validations if needed, such as file type and size checks

//       // selectedPhotos.push(file);
//       // }
    

//   // };

//   return (
//     <div>
//       <div className="container h-100">
//         <div className="container-fluid h-custom">
//           <div className="row d-flex justify-content-center align-items-center h-100">
//             <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
//               <form onSubmit={handleFormSubmit}>
//               <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
//                   <p className="lead fw-normal mb-0 me-3">Create Your Account</p>
//                 </div>

//                 <div className="form-outline mb-4">
//                   <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="form3Example3" className="form-control form-control-lg" placeholder="Enter Name" />
//                   <label className="form-label" for="form3Example3">Name</label>
//                 </div>

//                 <div className="form-outline mb-4">
//                   <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="form3Example3" className="form-control form-control-lg" placeholder="Enter username" />
//                   <label className="form-label" for="form3Example3">Username</label>
//                 </div>

//                 <div className="form-outline mb-4">
//                   <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="form3Example3" className="form-control form-control-lg" placeholder="Enter a valid email address" />
//                   <label className="form-label" for="form3Example3">Email address</label>
//                 </div>

//                 <div className="form-outline mb-4">
//                   <select value={role} onChange={(e) => setRole(e.target.value)} className="form-select form-select-lg" aria-label="Select Role">
//                     <option value="">Select Role</option>
//                     <option value="student">Student</option>
//                     <option value="teacher">Teacher</option>
//                   </select>
//                   <label className="form-label" for="form3Example3">Role</label>
//                 </div>

//                 {role === 'student' &&
//                 <div>
//                   <div className="mb-4">
//                   <input type="file" className="image" name="photo_url" onChange={handleFileChange} />
//                   <button onClick={handleUpload}>Upload</button>
//                   <p>{message}</p>
//                     {/* <label className="form-label">Upload Photos</label>
//                     <input type="file" className="image" name="photo_url" onChange={handleChangePhotos}/>
//                     <small className="form-text text-muted">Please upload 3 photos with 120x165 px dimensions and .png format.</small> */}
//                   </div>
//                   <div className="mb-4">
//                   <input type="file" className="image" name="photo_url" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload</button>
//       <p>{message}</p>
//                     {/* <label className="form-label">Upload Photos</label>
//                     <input type="file" onChange={handleChangePhotos} />
//                     <small className="form-text text-muted">Please upload 3 photos with 120x165 px dimensions and .png format.</small> */}
//                   </div>
//                   <div className="mb-4">
//                   <input type="file" className="image" name="photo_url" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload</button>
//       <p>{message}</p>
//                     {/* <label className="form-label">Upload Photos</label>
//                     <input type="file" onChange={handleChangePhotos} />
//                     <small className="form-text text-muted">Please upload 3 photos with 120x165 px dimensions and .png format.</small> */}
//                   </div>
//                 </div>
                  
                  
//                 }

//                 <div className="form-outline mb-4">
//                   <input type="text" value={classid} onChange={(e) => setClassid(e.target.value)} id="form3Example3" className="form-control form-control-lg" placeholder="Enter Class" />
//                   <label className="form-label" for="form3Example3">Class</label>
//                 </div>

//                 <div className="form-outline mb-4">
//                   <input type="text" value={rollid} onChange={(e) => setRollid(e.target.value)} id="form3Example3" className="form-control form-control-lg" placeholder="Enter RollID" />
//                   <label className="form-label" for="form3Example3">RollID</label>
//                 </div>

//                 <div className="form-outline mb-3">
//                   <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="form3Example4" className="form-control form-control-lg" placeholder="Enter password" />
//                   <label className="form-label" for="form3Example4">Password</label>
//                 </div>

//                 <div className="d-flex justify-content-between align-items-center">
//                   <div className="form-check mb-0">
//                     <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
//                     <label className="form-check-label" for="form2Example3">
//                       Remember me
//                     </label>
//                   </div>
//                   <a href="#!" className="text-body">Forgot password?</a>
//                 </div>

//                 <div className="text-center text-lg-start mt-4 pt-2">
//                   <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
//                   <p className="small fw-bold mt-2 pt-1 mb-0">Login to your account <a href="/login" className="link-danger">Login</a></p>
//                 </div>
//               </form>
//             </div>
//             <div className="col-md-9 col-lg-6 col-xl-5">
//               <img src="https://as2.ftcdn.net/v2/jpg/03/39/70/91/1000_F_339709132_H9HSSTtTmayePcbARkTSB2qoZTubJ6bR.jpg" className="img-fluid" alt="Registration" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

