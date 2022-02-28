import { test } from "vitest";
import { render } from "@testing-library/react";

import NoImageContainer from "../components/NoImageContainer";

test("NoImageContainer - Render test", async () => {
  const component = render(<NoImageContainer />);
  await component.findByText("No image available");
});
