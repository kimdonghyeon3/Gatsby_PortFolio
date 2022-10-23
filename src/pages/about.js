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
                              <div className="infoItemDes"> 25 </div>
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

                    <div className="aboutMeIntr">안녕하세요. 분석하는 개발자 김동현 입니다. 포트폴리오에는 진행해 보았던, 모든 프로젝트의
                    정보를 담고 있습니다. 작은 프로젝트부터 큰 프로젝트까지 다양한 프로젝트를 찾아볼 수 있습니다.</div>

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
                    <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"/>
                    <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"/>
                    <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"/>
                    <img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white"/>
                    <img src="https://img.shields.io/badge/linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"/>
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