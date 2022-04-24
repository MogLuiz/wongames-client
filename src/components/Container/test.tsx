// Packages
import { render, screen } from "@testing-library/react"

// Components
import Container from "."

describe("<Container />", () => {
  it("should render the heading", () => {
    const { container } = render(<Container />)
  })
})
