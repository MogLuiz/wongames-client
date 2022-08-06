// Packages
import { render, screen } from "@testing-library/react"

// Components
import Form from "."

describe("<Form />", () => {
  it("should render the heading", () => {
    const { container } = render(<Form />)

    expect(screen.getByRole("heading", { name: /Form/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
