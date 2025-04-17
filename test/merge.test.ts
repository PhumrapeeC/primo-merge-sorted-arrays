import { merge } from "../src/merge";

describe("merge", () => {
  test("should merge and sort correctly", () => {
    expect(merge([1, 3, 5], [2, 4, 6], [9, 7, 0])).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 9]);
  });

  test("should work with empty arrays", () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([], [1, 2], [3, 0])).toEqual([0, 1, 2, 3]);
  });

  test("should handle duplicates", () => {
    expect(merge([1, 2], [2, 3], [3, 2, 1])).toEqual([1, 1, 2, 2, 2, 3, 3]);
  });
});
