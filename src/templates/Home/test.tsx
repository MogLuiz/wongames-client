// Packages
import { render, screen } from "@testing-library/react"

// Components
import Home from "."

describe("<Home />", () => {
  it("should render the Menu and Footer", () => {
    render(<Home />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
  })
})
