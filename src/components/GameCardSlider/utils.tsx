// Components
import { SliderSettings } from "components/Slider"
import { ArrowBackIos as ArrowLeft } from "@styled-icons/material-outlined/ArrowBackIos"
import { ArrowForwardIos as ArrowRight } from "@styled-icons/material-outlined/ArrowForwardIos"

export const settings: SliderSettings = {
  prevArrow: <ArrowLeft aria-label="previous games" />,
  nextArrow: <ArrowRight aria-label="next games" />,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: "ondemand",
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ]
}
