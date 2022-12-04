import { QueryHome_banners } from "graphql/generated/QueryHome"

export const useBannersMapper = () => {
  const formatBanner = ({
    button,
    image,
    ribbon,
    subtitle,
    title
  }: QueryHome_banners) => ({
    img: `http://localhost:1337${image?.url}`,
    title: title,
    subtitle: subtitle,
    buttonLabel: button?.label,
    buttonLink: button?.link,
    ...(ribbon && {
      ribbon: ribbon.text,
      ribbonColor: ribbon.color,
      ribbonSize: ribbon.size
    })
  })

  const bannersMapper = (banners: Array<QueryHome_banners>) => {
    return banners.length ? banners.map(formatBanner) : null
  }

  return { bannersMapper }
}
