import { test } from "vitest";
import { render } from "@testing-library/react";

import ImageContainer from "../components/ImageContainer";
import { post } from "./utils/__mocks__";

test("ImageContainer - Render test", async () => {
  const component = render(
    <ImageContainer src={post.image} title={post.title} />
  );
  await component.findByAltText(post.title);
});
