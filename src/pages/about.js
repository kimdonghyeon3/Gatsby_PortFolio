import React from "react";
import Layout from "../components/layout";
import "./about.css"

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
                    
                    </div>

                    <div className="aboutMeEdu">Education</div>
                    <div className="aboutMeAwd">Award</div>
               </div>
          </Layout>
       </>
  );
}

export default AboutPage;