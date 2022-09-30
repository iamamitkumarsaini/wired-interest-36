import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
    width: 98%;
    margin: 0 auto;
  }
`;
export { StyledSlider };
