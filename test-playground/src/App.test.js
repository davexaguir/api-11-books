import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event"

test(' header renders with correct text', () => {
  render(<App />);
  const headerE1 = screen.getByRole("heading");
  expect(headerE1.textContent).toBe("Testing Playground");
});

describe('test for the button', () =>{
  test("button changes color when clicked", () => {
    render(<App />)
    const colorBtn = screen.getByRole("button")
  
    userEvent.click(colorBtn)
  
    expect(colorBtn).toHaveStyle({ backgroundColor: "blue" })
    expect(colorBtn.textContent).toBe("Change button color to green")
  })
}) 


test("checkbox disables button when first clicked, then enables button on second click", () => {
  render(<App />)
  const colorBtn = screen.getByRole("button")
  const checkbox = screen.getByRole("checkbox")

  userEvent.click(checkbox)
  expect(colorBtn).toBeDisabled()

  userEvent.click(checkbox)
  expect(colorBtn).toBeEnabled()
})

test("accurate text appears when button is enabled or disabled", () => {
  render(<App />)
  const checkbox = screen.getByRole("checkbox")
  const paragraphEl = screen.getByRole("paragraph")

  expect(paragraphEl.textContent).toBe("Button is enabled")

  userEvent.click(checkbox)
  expect(paragraphEl.textContent).toBe("Button is disabled")

  userEvent.click(checkbox)
  expect(paragraphEl.textContent).toBe("Button is enabled")
})