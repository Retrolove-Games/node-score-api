import { Table, Column, Model, AutoIncrement, PrimaryKey } from "sequelize-typescript"

@Table(
  {
    timestamps: false,
    tableName: "projects"
  }
)
export class Project extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number
  
  @Column
  name: string
}
