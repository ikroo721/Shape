/* eslint-disable no-unused-vars */
import React from "react";
import TestimonialCard from "./TestimonialCard";
import TopIdentityCard from "./TopIdentityCard";
import BrandsShowcaseContainer from "./BrandsShowcaseContainer";
const Brandidentity = () => {
  return (
    <div className="w-full  min-h-screen rounded-t-[1.5rem] pt-[8vw] bg-black ">
      <TopIdentityCard/>
      <BrandsShowcaseContainer/>
      <TestimonialCard/>
    </div>
  );
};

export default Brandidentity;
