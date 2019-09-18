import React from "react";

const TimeBar = ({ hours }) => {
  const time = [];
  for (let i = 0, len = hours.length; i < len; i++) {
    let cssclass = "hours-gray";
    if (i % 2) {
      cssclass = "hours-white";
    }
    time.push(<div className={cssclass}>{hours[i]}:00</div>);
  }
  return (
    <div className="program-time">
      <div className="times">时间</div>
      {time}
    </div>
  );
};

export default TimeBar;
