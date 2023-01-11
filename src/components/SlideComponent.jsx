import {
  Image,
  InfoButton,
  InfoContainer,
  InfoSubTitle,
  InfoTitle,
  Slide,
} from "../styles/SliderStyle";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

const SlideComponent = ({ img, title, desc }) => {
  return (
    <Slide>
      <Image src={img} />
      <InfoContainer>
        <InfoTitle>{title}</InfoTitle>
        <InfoSubTitle>{desc}</InfoSubTitle>
        <InfoButton>
          Shop Now <ArrowRightOutlinedIcon color="white" />
        </InfoButton>
      </InfoContainer>
    </Slide>
  );
};

export default SlideComponent;
