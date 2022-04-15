// Packages
import { render, screen } from "@testing-library/react"

// Mock
import "match-media-mock"

// Components
import Slider from "."

describe("<Slider />", () => {
  it("should render the heading", () => {
    const { container } = render(<Slider />)

    expect(screen.getByRole("heading", { name: /Slider/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
