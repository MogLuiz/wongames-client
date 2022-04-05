// Packages
import { screen } from "@testing-library/react"

// Utils
import { renderWithTheme } from "utils/tests/helpers"

const props = {
  img: "https://source.unsplash.com/user/willianjusten/1042x580",
  title: "Defy death",
  subtitle: "<p>Play the new <strong>CrashLands</strong> season",
  buttonLabel: "Buy now",
  buttonLink: "/games/defy-death"
}

// Components
import Banner from "."

describe("<Banner />", () => {
  it("should render correctly", () => {
    const { container } = renderWithTheme(<Banner {...props} />)

    expect(
      screen.getByRole("heading", { name: /Defy death/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole("heading", { name: /Play the new CrashLands season/i })
    ).toBeInTheDocument()

    expect(screen.getByRole("img", { name: /Defy death/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it("should render a Ribbon", () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="My Ribbon"
        ribonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/My Ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: "#3CD3C1" })
    expect(ribbon).toHaveStyle({
      height: "2.6rem",
      fontSize: "1.2rem"
    })
  })
})
