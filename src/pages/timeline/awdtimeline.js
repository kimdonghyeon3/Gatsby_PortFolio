import React from "react";
import "./awdtimeline.css"

const Awdtimeline = () => {
  return (
    <>
<div id="eduTimeLineContent">
<ul className="timeline">
  <li className="timeline-event">
    <label className="timeline-event-icon"></label>
    <div className="timeline-event-copy">
      <div className="timeline-event-thumbnail">2021</div>
      <div className="timelineTitle">우수상</div>
      <div className="timelineDes">Echo Project - AR Navigation</div>
    </div>
  </li>
  <li className="timeline-event">
    <label className="timeline-event-icon"></label>
    <div className="timeline-event-copy">
      <div className="timeline-event-thumbnail">2020</div>
      <div className="timelineTitle">장려</div>
      <div className="timelineDes">창업 아이디어 경진 대회</div>
    </div>
  </li>
</ul>  
</div>
    </>

  );
}

export default Awdtimeline;