import { test } from "vitest";
import { render } from "@testing-library/react";

import StoreWrapper from "./utils/StoreWrapper";
import PostDetail from "../components/PostDetail";

test("PostDetail - Render test", async () => {
  const component = render(
    <StoreWrapper>
      <PostDetail />
    </StoreWrapper>
  );
  await component.findByText("No post selected");
});
