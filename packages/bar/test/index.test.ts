import { bar } from "../index";
import { test, expect } from "./config";

test("insert an entry", async () => {
  expect(bar).toBe(1);
});
