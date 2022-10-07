// Packages
import { render, screen } from "@testing-library/react"

// Components
import Empty from "."

describe("<Empty />", () => {
  it("should render the heading", () => {
    const { container } = render(<Empty />)

    expect(screen.getByRole("heading", { name: /Empty/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
