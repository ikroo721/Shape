/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import BrandCard from "./BrandCard";
import Img1 from '/assets/Image/Brand1.webp'
import Img2 from '/assets/Image/Brand2.webp'
import Img3 from '/assets/Image/Brand3.webp'
import Img4 from '/assets/Image/Brand4.webp'
import Img5 from '/assets/Image/Brand5.webp'
import CoFounder from "./CoFounder.jsx";
const BrandsShowcaseContainer = () => {
    const [HoverElem, setHoverElem] = useState('');
    const Data = [
      { name: "Brand Identity",img:Img1 },
      { name: "Websites" ,img:Img2},
      { name: "SEO",img:Img3 },
      { name: "Craft CMS",img:Img4 },
      { name: "Shopify",img:Img5 },
    ];
  return (
    <div className=" flex items-center justify-center">
        <div className="slg:w-[88%] w-[95%]  flex lg:flex-row flex-col-reverse ">
          <div className="lg:w-[31.5%] ">
            <CoFounder/>
          </div>
          <div className="lg:w-[68.5%]  ">
            {Data.map((e) => (
              <BrandCard key={e.name} item={e} hoverElem={HoverElem} 
              setHoverElem={setHoverElem} />
            ))}
          </div>
        </div>
      </div>
  )
}

export default BrandsShowcaseContainer