// Components
import { SliderSettingsType } from "components/Slider"
import { ArrowBackIos as ArrowLeft } from "@styled-icons/material-outlined/ArrowBackIos"
import { ArrowForwardIos as ArrowRight } from "@styled-icons/material-outlined/ArrowForwardIos"

const commonSettings: SliderSettingsType = {
  infinite: false,
  lazyLoad: "ondemand",
  arrows: true,
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />
}

export const settings: SliderSettingsType = {
  ...commonSettings,
  slidesToShow: 4,
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

export const modalSettings: SliderSettingsType = {
  ...commonSettings,
  slidesToShow: 1
}
