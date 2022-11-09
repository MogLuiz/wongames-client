import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { renderWithTheme } from "utils/tests/helpers"

import UserDropdown from "."

describe("<UserDropdown />", () => {
  it("should render the username", () => {
    renderWithTheme(<UserDropdown username="Willian" />)

    expect(screen.getByText(/willian/i)).toBeInTheDocument()
  })
})
