// Components
import { SliderSettingsType } from "components/Slider"
import { ArrowBackIos as ArrowLeft } from "@styled-icons/material-outlined/ArrowBackIos"
import { ArrowForwardIos as ArrowRight } from "@styled-icons/material-outlined/ArrowForwardIos"

export const settings: SliderSettingsType = {
  prevArrow: <ArrowLeft aria-label="previous image" />,
  nextArrow: <ArrowRight aria-label="next image" />,
  slidesToShow: 4,
  arrows: true,
  infinite: false,
  lazyLoad: "ondemand",
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    }
  ]
}
