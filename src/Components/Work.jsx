/* eslint-disable react/no-unescaped-entities */
import React from "react";
import WorkCardContainer from "./WorkCardContainer";
import WorkdTopText from "./WorkdTopText";
import WorkBottomText from "./WorkBottomText";
const Work = () => {
  return (
    <div className="xl:px-20 py-10">
      <WorkdTopText/>
      <WorkCardContainer/>
      <WorkBottomText/>
    </div>
  );
};

export default Work;
