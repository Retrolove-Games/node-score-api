import { Table, Column, Model, AutoIncrement, PrimaryKey, Length } from "sequelize-typescript"

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
  
  @Length({ min: 3, max: 255 })
  @Column
  name: string

  @Length({ min: 3, max: 255 })
  @Column
  encryption_key: string
}
