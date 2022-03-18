// Packages
import { render, screen } from "@testing-library/react"

// Components
import MediaMatch from "."

describe("<MediaMatch />", () => {
  let desktopHeading: Element
  let mobileHeading: Element

  // hooks tests
  beforeEach(() => {
    render(
      <>
        <MediaMatch greaterThan="medium">
          <h1 data-testid="desktop">Desktop</h1>
        </MediaMatch>
        <MediaMatch lessThan="medium">
          <h1 data-testid="mobile">Mobile</h1>
        </MediaMatch>
      </>
    )
  })
})
