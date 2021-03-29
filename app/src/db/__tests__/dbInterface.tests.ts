import db from "../Sequelize";
import { addProject, addScore, getResults } from "../dbInterface";
import CryptoJS from "crypto-js";
import { uniqueNamesGenerator, adjectives, colors, animals } from "unique-names-generator";

test('addProjectProper', async () => {
  const result = await addProject("test", "test");
  expect(result).toBe(true);
});

test('addProjectProperVeryLong', async () => {
  await expect(addProject('#'.repeat(300), "test")).rejects.toEqual(expect.any(Error)); 
});

test('addScoreProper', async () => {
  const randomName: string = uniqueNamesGenerator({
    dictionaries: [adjectives, colors, animals]
  });

  const testData = {
    nickname: randomName,
    score: Math.floor(Math.random() * 9999999) + 1 ,
    source: "itch.io"
  };
  const data = CryptoJS.AES.encrypt(JSON.stringify(testData), 'test').toString();

  const result = await addScore("test", data);
  expect(result).toBe(true);
});

test('addScoreInvalidData', async () => {
  const testData = {
    nickname: "J".repeat(10000),
    score: 1000,
    source: "itch.io"
  };
  const data = CryptoJS.AES.encrypt(JSON.stringify(testData), 'test').toString();

  await expect(addScore("test", data)).rejects.toEqual(expect.any(Error)); 
});

test('addScoreInvalidId', async () => {
  const testData = {
    nickname: "Jan",
    score: 1000,
    source: "itch.io"
  };
  const data = CryptoJS.AES.encrypt(JSON.stringify(testData), 'test').toString();

  await addScore("noneex", data).then(data => {
    expect(data).toEqual(expect.any(Error));
  }).catch(error => {
    console.log(error);
  });
});

test('addScoreInvalidEncKey', async () => {
  const testData = {
    nickname: "Jan",
    score: 1000,
    source: "itch.io"
  };
  const data = CryptoJS.AES.encrypt(JSON.stringify(testData), 'testaaa').toString();

  await addScore("test", data).then(data => {
    expect(data).toEqual(expect.any(Error));
  }).catch(error => {
    console.log(error);
  });
});

test('getProperResults', async () => {
  const results = await getResults('test').then(data => {
    console.log(data);
    expect(data.length).toBe(10);
  }).catch(error => {
    console.log(error);
  });
});

test('getInvalidResults', async () => {
  const results = await expect(getResults('testaaaanx')).rejects.toEqual(expect.any(Error)); 
});

afterAll(async done => {
  db.sequelize.close();
  done();
});
