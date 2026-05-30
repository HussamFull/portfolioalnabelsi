import React from "react";
import TargetMarquee from "react-fast-marquee";

// حل مشكلة تضارب المترجم الحديث مع الكائنات في بعض إصدارات Vite
const Marquee = TargetMarquee.default || TargetMarquee;

const MarqueeWapper = ({ images, direction }) => {
  return (
    <div className="marquee-wrapper text-slider">
      <div className="marquee-inner">
        <Marquee direction={direction}>
          {images?.map((image, id) => (
            <img key={id} src={image} alt="" />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeWapper;