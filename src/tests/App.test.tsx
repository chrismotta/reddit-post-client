import { test } from "vitest";
import { render } from "@testing-library/react";

import StoreWrapper from "./utils/StoreWrapper";
import ThemeWrapper from "./utils/ThemeWrapper";
import App from "../App";

test("App - Render test", async () => {
  const component = render(
    <StoreWrapper>
      <ThemeWrapper>
        <App />
      </ThemeWrapper>
    </StoreWrapper>
  );
  await component.findByText("No post selected");
});
