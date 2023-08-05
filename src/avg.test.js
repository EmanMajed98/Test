import Avg from "./avg"
test('calculates Average', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(Avg(arr)).toBe(3);
  });
