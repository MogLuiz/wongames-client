// Packages
import { render, screen } from "@testing-library/react"

// Utils
import { renderWithTheme } from "utils/tests/helpers"

// Components
import Highlight from "."

const props = {
  title: "Heading 1",
  subtitle: "Heading 2"
}

describe("<Highlight />", () => {
  it("should render heading and button", () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole("heading", { name: /heading 1/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole("heading", { name: /heading 2/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
