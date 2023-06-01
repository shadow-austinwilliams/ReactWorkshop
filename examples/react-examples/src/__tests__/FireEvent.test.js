import { fireEvent, render, screen } from "@testing-library/react";

import FireEvent from "../components/FireEvent";

describe("FireEvent Component", () => {
  test("Clicking 'Say Hi' button shows Hello World!", () => {
    render(<FireEvent />);

    const sayHiButton = screen.getByRole("button", { name: "Say Hi" });
    fireEvent.click(sayHiButton);

    const helloWorldText = screen.getByText("Hello World!");

    expect(helloWorldText).toBeVisible();
  });
});
