import { test } from "vitest";
import { render } from "@testing-library/react";

import EmptyPostDetail from "../components/EmptyPostDetail";

test("EmptyPostDetail - Render test", async () => {
  const component = render(<EmptyPostDetail />);
  await component.findByText("No post selected");
});
