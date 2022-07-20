import { screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { renderWithTheme } from "utils/tests/helpers"
import theme from "styles/theme"

import Radio from "."

describe("<Radio />", () => {
  it("should render with label (white)", () => {
    const { container } = renderWithTheme(
      <Radio label="Radio" labelFor="check" value="anyValue" />
    )

    const label = screen.getByText("Radio")
    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({ color: theme.colors.white })
    expect(container.firstChild).toMatchSnapshot()
  })
})
