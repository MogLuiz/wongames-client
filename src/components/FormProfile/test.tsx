// Packages
import { render, screen } from "@testing-library/react"

// Components
import FormProfile from "."

describe("<FormProfile />", () => {
  it("should render the heading", () => {
    const { container } = render(<FormProfile />)

    expect(screen.getByRole("heading", { name: /FormProfile/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
