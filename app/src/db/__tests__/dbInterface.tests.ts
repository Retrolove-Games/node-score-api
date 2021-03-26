import db from "../Sequelize";
import { addProject } from "../dbInterface";

test('addProjectProper', async () => {
  const result = await addProject("test", "test");
  expect(result).toBe(true);
});

test('addProjectProperVeryLong', async () => {
  await expect(addProject('#'.repeat(300), "test")).rejects.toEqual(expect.any(Error)); 
});

afterAll(async done => {
  db.sequelize.close();
  done();
});
