/* 
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders FitForge landing page without crashing", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );

  // Replace 'FitForge' with whatever unique text is in your Header
  const linkElement = screen.getByText(/find your energy/i);
  expect(linkElement).toBeInTheDocument();
});
*/
