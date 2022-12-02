import { QueryHome_banners } from "graphql/generated/QueryHome"

export const useBannersDataFactory = (banners: Array<QueryHome_banners>) => {
  const bannerDataFactory = ({
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

  const bannerData = banners.map(bannerDataFactory)

  return { bannerData }
}
