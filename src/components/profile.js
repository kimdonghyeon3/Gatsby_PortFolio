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
        <a href="https://github.com/kimdonghyeon3"><AiFillGithub size="30" color="white"/></a>
        <a href="https://www.instagram.com/ehdgus___98/"><AiFillInstagram size="30" color="white"/></a>
        <a href="https://infodon.tistory.com/"><SiBloglovin size="30" color="white"/></a>
        <a href="mailto:kimdonghyeon98@gmail.com"><AiOutlineMail size="30" color="white"/></a>
      </div>

      <div className="emailContect" style={{color:"white"}}>
        <AiOutlineMail size="25" color="white"/>
          <h4>kimdonghyeon98@gmail.com</h4>
      </div>
      <div className="version" style={{color:"white"}}>@ver.  2022-7-11</div>
    </div>
  );
}

export default Profile;