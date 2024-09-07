import React from "react";
import img1 from "/assets/Image/Carousel1Image.webp";
import img1Inner from "/assets/Image/Carousel1InnerImage.webp";
import img2Inner from "/assets/Image/Carousel2InnerImage.webp";
import img2 from "/assets/Image/Carousel2Image.webp";
import img3 from "/assets/Image/Carousel3Image.webp";
import img4 from "/assets/Image/Carousel4Image.webp";
import img5 from "/assets/Image/Carousel5Image.webp";
import img6 from "/assets/Image/Carousel6Image.webp";
const SwiperData = () => {
  const Data = [
    { img: img1, inner: img1Inner },
    { img: img2, inner: img2Inner },
    { img: img3, inner: img1Inner },
    { img: img4, inner: img2Inner },
    { img: img5, inner: img1Inner },
    { img: img6, inner: img2Inner }

];
return Data;
};

export default SwiperData;
