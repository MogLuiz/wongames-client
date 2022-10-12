// Packages
import { render, screen } from "@testing-library/react"

// Components
import ProfileMenu from "."

describe("<ProfileMenu />", () => {
  it("should render the heading", () => {
    const { container } = render(<ProfileMenu />)

    expect(screen.getByRole("heading", { name: /ProfileMenu/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
