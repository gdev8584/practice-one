import React from "react";
import Slider from "react-slick";
import "../App.css";
import CardDetails from "./CardDetails";
import Next from '../asserts/chevron-circled.svg'
import settings from "./settings";


export default function Card({data}) {
  const slider = React.useRef(null);

  return (
    <div>
      <div style={{ 
        margin: 30,
        position:"absolute",
        top:"80%",
        right:0,
        zIndex:1
         }} className="btn-aa">
        <button onClick={() => slider.current.slickPrev()}><img className="rotateImg" width={60} src={Next} alt="Next" /></button>
        <button
          style={{ marginLeft: 15 }}
          onClick={() => slider.current.slickNext()}
        >
          <img width={60} src={Next} alt="Next" />
        </button>
      </div>

      <Slider ref={slider} {...settings}>
        {data.map((item, index) => {
          return <CardDetails item={item} />;
        })}
      </Slider>
    </div>
  );
}