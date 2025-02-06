import React from "react";
import { useInView } from "react-intersection-observer";
import "../styles/Progressbar.css";

const ProgressBar = ({ skill, percentage }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="progress-bar" ref={ref}>
      <div className="progress-label">
        <span>{skill}</span>
        <span>{percentage}%</span>
      </div>
      <div className="progress-track">
        <div
          className={`progress-fill ${inView ? "animate" : ""}`}
          style={{ width: inView ? `${percentage}%` : "0%" }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
