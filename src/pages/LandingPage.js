import React, { } from "react";
// import axios from "axios";
 
import {Link} from 'react-router-dom';
 
export default function LandingPage(){
  // const logoutUser = async () => {
  //   await axios.post("http://localhost:5000/logout");
  //   window.location.href = "/";
  // };
  return (
    <div>
        <div className="container h-100">
            <div className="row h-100">
                <div className="col-12">
                    <h1>Welcome to this React Application</h1>
                    <p><Link to="/login" className="btn btn-success">Login</Link> | <Link to="/register" className="btn btn-success">register</Link> </p>
                    {/* <button onClick={logoutUser}>Logout</button> */}
                </div>
            </div>
        </div>
    </div>
  );
}