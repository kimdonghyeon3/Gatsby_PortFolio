import React from "react";
import "./edutimeline.css"

const Edutimeline = () => {
  return (
    <>
<div id="eduTimeLineContent">
<ul class="timeline">
  <li class="timeline-event">
    <label class="timeline-event-icon"></label>
    <div class="timeline-event-copy">
      <div class="timeline-event-thumbnail">2022</div>
      <div>멋쟁이 사자 처럼</div>
      <div>백엔드 교육 과정</div>
    </div>
  </li>
  <li class="timeline-event">
    <label class="timeline-event-icon"></label>
    <div class="timeline-event-copy">
      <div class="timeline-event-thumbnail">2022</div>
      <div>EXA</div>
      <div>PR, BigData 등 다양한 강연 진행</div>
    </div>
  </li>
  <li class="timeline-event">
    <label class="timeline-event-icon"></label>
    <div class="timeline-event-copy">
      <div class="timeline-event-thumbnail">2020</div>
      <div>아두이노 </div>
      <div>드론 아두이노 수료</div>
    </div>
  </li>
    <li class="timeline-event">
    <label class="timeline-event-icon"></label>
    <div class="timeline-event-copy">
      <div class="timeline-event-thumbnail">2017</div>
      <div>대학교 </div>
      <div>응용컴퓨터 공학과 재학</div>
    </div>
  </li>
</ul>  
</div>
    </>

  );
}

export default Edutimeline;