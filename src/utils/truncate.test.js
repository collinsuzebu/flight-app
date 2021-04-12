import { truncate } from "./truncate";

describe("truncate", () => {
  it("should add elipsis to end of a long truncated string", () => {
    const sample = "12345";
    const result = truncate(sample, 3);
    expect(result).toMatch(/.../i);
  });

  it("should truncate long string to <5> string without ellipsises", () => {
    const sample = "12345";
    const truncatedString = truncate(sample, 5);
    expect(truncatedString).toEqual(sample);
  });
});
