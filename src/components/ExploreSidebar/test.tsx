import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { renderWithTheme } from "utils/tests/helpers"
import { css } from "styled-components"

import ExploreSidebar from "."

describe("<ExploreSidebar />", () => {
  it("should render headings", () => {
    renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn} />)

    expect(screen.getByRole("heading", { name: /price/i })).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: /sort by/i })
    ).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /system/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /genre/i })).toBeInTheDocument()
  })
})