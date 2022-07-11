import React from "react";
import "./profile.css"
import {AiFillGithub, AiFillInstagram, AiOutlineMail} from 'react-icons/ai'
import {SiBloglovin} from 'react-icons/si'

function Profile() {
  return (
    <div className="container">
      <div className="profileImgContainer">
        <img src={
          require("../images/profileImg.jpg").default}
          alt="profileImg"
          className="profileImg" 
          />
        </div>

      <h1 style={{color:"white", margin:"30px 0 0 0"}}>Kimdonghyeon</h1>
      <div style={{color:"white", margin:"15px 0 0 0"}}>김동현의 backend PortFolio</div>

      <div className="snsIcon">
        <a href=""><AiFillGithub size="30" color="white"/></a>
        <a href=""><AiFillInstagram size="30" color="white"/></a>
        <a href=""><SiBloglovin size="30" color="white"/></a>
      </div>

      <div className="emailContect" style={{color:"white"}}>
        <AiOutlineMail size="25" color="white"/>
          <h4>contact - email</h4></div>
      <div className="version" style={{color:"white"}}>@ver.  2022-7-11</div>
    </div>
  );
}

export default Profile;