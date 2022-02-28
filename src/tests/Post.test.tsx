import { test } from "vitest";
import { render } from "@testing-library/react";

import StoreWrapper from "./utils/StoreWrapper";
import Post from "../components/Post";
import { post } from "./utils/__mocks__";

test("Post - Render test", async () => {
  const component = render(
    <StoreWrapper>
      <Post data={post} selected={false} opened={false} />
    </StoreWrapper>
  );
  await component.findByText(post.author);
});
