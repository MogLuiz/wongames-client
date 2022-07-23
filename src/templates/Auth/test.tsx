import { screen } from "@testing-library/react"
import { renderWithTheme } from "utils/tests/helpers"

import Auth from "."

describe("<Auth />", () => {
  it("should render all components and children", () => {
    renderWithTheme(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>
    )

    expect(screen.getAllByRole("img", { name: /won games/i })).toHaveLength(2)

    expect(
      screen.getByRole("heading", {
        name: /Seus jogos favoritos em um só lugar/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole("heading", {
        name: /A won é a melhor e mais completa plataforma de games/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole("heading", { name: /auth title/i })
    ).toBeInTheDocument()

    expect(screen.getByRole("textbox")).toBeInTheDocument()
  })
})
