import React from "react";
import "./awdtimeline.css"

const Awdtimeline = () => {
  return (
    <>
<div id="eduTimeLineContent">
<ul class="timeline">
  <li class="timeline-event">
    <label class="timeline-event-icon"></label>
    <div class="timeline-event-copy">
      <div class="timeline-event-thumbnail">2021</div>
      <div>Echo Project - 우수상</div>
      <div>AR Navigation</div>
    </div>
  </li>
  <li class="timeline-event">
    <label class="timeline-event-icon"></label>
    <div class="timeline-event-copy">
      <div class="timeline-event-thumbnail">2020</div>
      <div>창업 무슨 대회 였는디 - 장려</div>
      <div>창업 내용 설명회 같은거</div>
    </div>
  </li>
</ul>  
</div>
    </>

  );
}

export default Awdtimeline;