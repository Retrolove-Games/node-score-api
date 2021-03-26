import { test as dbTest } from "../dbInterface";

test('basic', () => {
  expect(dbTest()).toBe(1);
});
