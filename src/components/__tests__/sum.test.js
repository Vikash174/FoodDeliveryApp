import { sum } from '../sum';

test('Sum function should calculate the sum of two numbers', () => {
  const result = sum(3, 3);

  expect(result).toBe(6);
});
