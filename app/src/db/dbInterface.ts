import "./Sequelize";
import { Project } from "./models/Project";

export interface projectInterface {
  name: string
  encryption_key: string
}

export const addProject = (name: string, encryption_key: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    new Project({ name, encryption_key })
      .save()
      .then(() => { resolve(true) })
      .catch(error => { reject(error) });
  });
}
