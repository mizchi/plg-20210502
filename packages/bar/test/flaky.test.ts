import { test, expect } from "./config";

test("pass 90%", async () => {
  expect(Math.random() < 0.5).toBeTruthy();
});
