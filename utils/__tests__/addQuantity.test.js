import { foundProduct } from '../cookies';

// This is closest to what we want to test
// testing a single, small function that doesn't depend on a library
test('stringify a cookie value', () => {
  expect(foundProduct([{ id: 1, amount: 2 }])).toBe('[{"id":1,"amount":2}]');
});
