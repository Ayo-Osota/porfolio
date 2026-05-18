import { assignBox } from "./assignBox";

describe("assignBox", () => {
  test("clear Box 2: thriving and overwhelmed", () => {
    expect(assignBox(5, 5)).toBe("box2");
  });

  test("clear Box 1: struggling and overwhelmed", () => {
    expect(assignBox(1, 5)).toBe("box1");
  });

  test("clear Box 3: thriving and calm", () => {
    expect(assignBox(5, 1)).toBe("box3");
  });

  test("clear Box 4: struggling and calm", () => {
    expect(assignBox(1, 1)).toBe("box4");
  });

  test("tie-break: success=3, sanity=4 routes to Box 2", () => {
    expect(assignBox(3, 4)).toBe("box2");
  });

  test("both mid (3,3) defaults to Box 2", () => {
    expect(assignBox(3, 3)).toBe("box2");
  });
});
