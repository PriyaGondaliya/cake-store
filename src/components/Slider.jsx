import { Arrow, Container, Wrraper } from "../styles/SliderStyle";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { sliderItems } from "../data";
import SlideComponent from "./SlideComponent";
import { useState } from "react";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        {" "}
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrraper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <SlideComponent
            img={item.img}
            title={item.title}
            desc={item.desc}
            id={item.id}
          />
        ))}
      </Wrraper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        {" "}
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
