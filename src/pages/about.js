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
                              <a className="infoItemDes" href="https://github.com/kimdonghyeon3"> GitHub 바로가기 </a>
                         </div>
                         <div className="infoItems">
                              <div className="infoItemTitle">Blog</div>
                              <a className="infoItemDes" href="https://infodon.tistory.com/"> Blog 바로가기 </a>
                         </div>
                    </div>

                    <div className="aboutMeIntr">
                         🤓 안녕하세요 백엔드 개발자 김동현 입니다.
                          <br/>
                          작은 프로젝트부터 큰 프로젝트 까지 진행해 왔던, 모든 프로젝트 정보를
                         기록하고자 노력해 왔습니다. <br/><br/>
                         이 외에도 학습한 내용, 프로젝트의 상세 정보들을 Blog, Git을 활용해
                         기록해 왔습니다.<br/><br/>
                         👍 다양한 기록을 편하게 살펴보세요 👍
                    </div>

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