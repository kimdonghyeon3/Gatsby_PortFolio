import React from "react";
import "./timeline.css"

const Edutimeline = () => {
  return (
    <>
<div id="eduTimeLineContent">
<ul className="timeline">
  <li className="timeline-event">
    <div className="timeline-event-icon"></div>
    <div className="timeline-event-copy">
      <div className="timeline-event-thumbnail">2022</div>
      <div className="timelineTitle">멋쟁이 사자 처럼</div>
      <div className="timelineDes">백엔드 교육 과정</div>
    </div>
  </li>
  <li className="timeline-event">
    <div className="timeline-event-icon"></div>
    <div className="timeline-event-copy">
      <div className="timeline-event-thumbnail">2022</div>
      <div className="timelineTitle">EXA</div>
      <div className="timelineDes">PR, BigData 등 다양한 강연 진행</div>
    </div>
  </li>
  <li className="timeline-event">
    <div className="timeline-event-icon"></div>
    <div className="timeline-event-copy">
      <div className="timeline-event-thumbnail">2017</div>
      <div className="timelineTitle">대학교 </div>
      <div className="timelineDes">응용컴퓨터 공학과 재학</div>
    </div>
  </li>
</ul>  
</div>
    </>

  );
}

export default Edutimeline;