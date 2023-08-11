
import "./styles/SliderImgs.css";
import { useState } from "react";

const Sliderlmgs = ({ product }) => {
  const [imgSelected, setimgSelected] = useState(0);

  const movableStyle = {
    transform: `translateX(calc(-${imgSelected}/3 * 100%))`,
  };

  const handlePrev = () => {
    if (imgSelected - 1 >= 0) {
      setimgSelected(imgSelected - 1);
    } else {
      setimgSelected(2);
    }
  };
  const handleNext = () => {
    if (imgSelected + 1 <= 2) {
      setimgSelected(imgSelected + 1);
    } else {
      setimgSelected(0);
    }
  };

  return (
    <div className="slider">
      <button onClick={handlePrev} className="slider_btn slider_prev">
        &#60;
      </button>
      <div style={movableStyle} className="slider_movable">
        {product?.images.map((imgInfo) => (
          <div className="slider_container" key={imgInfo.id}>
            <img className="slider_img" src={imgInfo.url} alt="" />
          </div>
        ))}
      </div>
      <button onClick={handleNext} className="slider_btn slider_next">
        &#62;
      </button>
    </div>
  );
};

export default Sliderlmgs;
