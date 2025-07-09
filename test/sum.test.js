import { sum } from "../src/sum.js";

describe("matching cities to foods", () => {
  test("test sum function 1", () => {
    expect(sum(1, 2)).toBe(3);
  });
  test("test sum function 2", () => {
    expect(sum(1, 2)).toBe(3);
  });
  // jangan ada oprator
  test("test sum function 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
