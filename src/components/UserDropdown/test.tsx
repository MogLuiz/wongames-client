// Packages
import { render, screen } from "@testing-library/react"

// Components
import UserDropdown from "."

describe("<UserDropdown />", () => {
  it("should render the heading", () => {
    const { container } = render(<UserDropdown />)

    expect(screen.getByRole("heading", { name: /UserDropdown/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
