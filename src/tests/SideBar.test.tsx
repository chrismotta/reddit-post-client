import { test } from "vitest";
import { render } from "@testing-library/react";

import StoreWrapper from "./utils/StoreWrapper";
import SideBar from "../components/SideBar";

test("SideBar - Render test", async () => {
  const component = render(
    <StoreWrapper>
      <SideBar />
    </StoreWrapper>
  );
  await component.findByText("Top Reddit Posts");
});
