import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { renderWithTheme } from "utils/tests/helpers"

import items from "./mock"

import ExploreSidebar from "."

import { css } from "styled-components"

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

  it("should render inputs", () => {
    renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn} />)

    expect(
      screen.getByRole("checkbox", { name: /under \$50/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole("radio", { name: /low to high/i })
    ).toBeInTheDocument()
  })

  it("should render the filter button", () => {
    renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn} />)

    expect(screen.getByRole("button", { name: /filter/i })).toBeInTheDocument()
  })

  it("should check initial values that are passed", () => {
    renderWithTheme(
      <ExploreSidebar
        items={items}
        onFilter={jest.fn}
        initialValues={{ windows: true, sort_by: "low-to-high" }}
      />
    )

    expect(screen.getByRole("checkbox", { name: /windows/i })).toBeChecked()

    expect(screen.getByRole("radio", { name: /low to high/i })).toBeChecked()
  })
})
