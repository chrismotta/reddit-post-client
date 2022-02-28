import { test } from "vitest";
import { render } from "@testing-library/react";

import StoreWrapper from "./utils/StoreWrapper";
import PostList from "../components/PostList";

test("PostList - Render test", async () => {
  const component = render(
    <StoreWrapper>
      <PostList />
    </StoreWrapper>
  );
  await component.findByText("Dismiss All Posts");
});
