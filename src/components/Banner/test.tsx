// Packages
import { screen } from "@testing-library/react"

// Utils
import { renderWithTheme } from "utils/tests/helpers"

// Mock
import "match-media-mock"
import { MockBannerHelperTest } from "./mock"

// Components
import Banner, { BannerProps } from "."

type TRestBannerProps = Pick<
  BannerProps,
  "ribbon" | "ribbonColor" | "ribbonSize"
>

const factorySetupTestHelper = (restProps?: TRestBannerProps) => {
  const utils = renderWithTheme(
    <Banner {...MockBannerHelperTest} {...restProps} />
  )

  const bannerTitle = screen.getByRole("heading", { name: /Defy death/i })
  const bannerSubtitle = screen.getByRole("heading", {
    name: /Play the new CrashLands season/i
  })
  const bannerImage = screen.getByRole("img", { name: /Defy death/i })
  const ribbon = screen.queryByText(/My Ribbon/i)

  return { ...utils, bannerTitle, bannerSubtitle, bannerImage, ribbon }
}

describe("<Banner />", () => {
  it("should render correctly", () => {
    const { container, bannerTitle, bannerSubtitle, bannerImage } =
      factorySetupTestHelper()

    expect(bannerTitle).toBeInTheDocument()

    expect(bannerSubtitle).toBeInTheDocument()

    expect(bannerImage).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it("should render a Ribbon", () => {
    const { ribbon } = factorySetupTestHelper({
      ribbon: "My Ribbon",
      ribbonSize: "small",
      ribbonColor: "secondary"
    })

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: "#3CD3C1" })
    expect(ribbon).toHaveStyle({
      height: "2.6rem",
      fontSize: "1.2rem"
    })
  })
})
