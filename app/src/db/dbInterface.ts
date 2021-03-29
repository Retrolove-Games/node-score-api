import "./Sequelize";
import { Project } from "./models/Project";
import { Highscore } from "./models/Highscore";
import CryptoJS from "crypto-js";

export const addProject = (name: string, encryption_key: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    new Project({ name, encryption_key })
      .save()
      .then(() => { resolve(true) })
      .catch(error => { reject(error) });
  });
}

export const addScore = (project_name: string, encrypted_data: string): Promise<boolean> => {
  return new Promise(async (resolve, reject) => {
    const project = await Project.findOne({ where: { name: project_name } });
    let data = {};

    // 404
    if (project === null) {
      return reject(new Error("Object not found"));
    }

    // Try to decrypt
    try {
      const key = project.encryption_key;
      const decryptedData = CryptoJS.AES.decrypt(encrypted_data, key).toString(CryptoJS.enc.Utf8);
      data = JSON.parse(decryptedData);
    } catch (e) {
      return reject(e);
    }
    
    new Highscore({
        project_id: project.id, 
        ...data 
      })
      .save()
      .then(() => { resolve(true) })
      .catch(error => { reject(error) });
  });
}

export const getResults = (project_name: string, count = 10): Promise<Array<object>> => {
  return new Promise(async (resolve, reject) => {
    const project = await Project.findOne({ where: { name: project_name } });
    let data = {};

    // 404
    if (project === null) {
      return reject(new Error("Object not found"));
    }

    const models = await Highscore.findAll({
      where: {
        project_id: project.id, 
      },
      attributes: ['nickname', 'score'],
      limit: count,
      order: [['score', 'DESC']],
      raw : true
    });

    resolve(models);
  });
}
