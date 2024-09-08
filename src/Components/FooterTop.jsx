/* eslint-disable no-unused-vars */
import React from "react";
import FooterTopAbout from "./FooterTopAbout";
import FooterTopGoogleReview from "./FooterTopGoogleReview";

const FooterTop = () => {
  return (
    <div className="w-full lg:h-1/2 h-[90%]  flex justify-center">
      <div className="h-full w-[85%]  flex justify-between lg:flex-row flex-col">
        <FooterTopGoogleReview/>
        <FooterTopAbout/>
      </div>
    </div>
  );
};

export default FooterTop;
