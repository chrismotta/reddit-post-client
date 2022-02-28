import { test } from "vitest";
import { render } from "@testing-library/react";

import PostSkeleton from "../components/PostSkeleton";

test("PostSkeleton - Render test", async () => {
  const component = render(<PostSkeleton />);
  await component.findByTitle("Loading post...");
});
