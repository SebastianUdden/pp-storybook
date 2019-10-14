import { sum } from "./math";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test("adding positive numbers is not zero", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test("two plus two", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(4);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test("adding floating point numbers", () => {
  const value = 0.1 + 0.2;
  expect(value).toBeCloseTo(0.3);
  expect(value).toBeCloseTo(0.301);
});

test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test("but there is a 'stop' in Christoph", () => {
  expect("Christoph").toMatch(/stop/);
});

const countries = ["sweden", "spain", "england", "equador", "russia"];
test("the russians have a country", () => {
  expect(countries).toContain("russia");
  expect(new Set(countries)).toContain("russia");
});

const complieAndroidCode = () => {
  throw new Error("you are using the wrong JDK");
};
test("compiling android goes as expected", () => {
  expect(complieAndroidCode).toThrow();
  expect(complieAndroidCode).toThrow(Error);

  expect(complieAndroidCode).toThrow("you are using the wrong JDK");
  expect(complieAndroidCode).toThrow(/JDK/);
});
