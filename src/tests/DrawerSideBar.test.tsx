import { test } from "vitest";
import { render } from "@testing-library/react";

import DrawerSideBar from "../components/DrawerSideBar";

test("DrawerSideBar - Render test", async () => {
  const component = render(<DrawerSideBar />);
  await component.findByTitle("Show Posts List");
});
