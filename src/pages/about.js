import React from "react";
import Layout from "../components/layout";
import "./about.css"
import Awdtimeline from "./timeline/awdtimeline";
import Edutimeline from "./timeline/edutimeline";

function AboutPage() {
  return (
       <>
          <title>AboutPage</title>
          <Layout pageTitle="About Me">
               <div className="aboutMeContainer">
                    <div className="aboutMeTitle">About Me</div>

                    <div className="aboutMeInfo">
                         <div className="infoItems">
                              <div className="infoItemTitle">Name</div>
                              <div className="infoItemDes"> 김동현 </div>
                         </div>
                         <div className="infoItems">
                              <div className="infoItemTitle">Age</div>
                              <div className="infoItemDes"v> 25 </div>
                         </div>
                         <div className="infoItems">
                              <div className="infoItemTitle">Email</div>
                              <div className="infoItemDes"> kimdonghyeon98@gmail.com </div>
                         </div>
                         <div className="infoItems">
                              <div className="infoItemTitle">GitHub</div>
                              <div className="infoItemDes"> github.com/kimdonghyeon3 </div>
                         </div>
                    </div>

                    <div className="aboutMeIntr">여기에는 간단한 자기를 소개하는 글을 쓰자</div>

                    <div className="stackContainer">
                         <div className="stackTitle">Stack</div>
                         <div className="stackGroup">
                    <img src="https://img.shields.io/badge/JUnit5-25A162?style=for-the-badge&logo=JUnit5&logoColor=white"/>
                    <img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white"/>
                    <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
                    <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
                    <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
                    <img src="https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"/>
                    <img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"/>
                    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
                         </div>
                    </div>

                    <div className="aboutMeEdu">
                         <div className="aboutMeEduTitle">Education</div>
                         <Edutimeline></Edutimeline>
                    </div>

                    <div className="aboutMeAwd">
                         <div className="aboutMeAwdTitle">Award</div>
                         <Awdtimeline></Awdtimeline>
                    </div>
               </div>
          </Layout>
       </>
  );
}

export default AboutPage;