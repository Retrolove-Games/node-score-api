import { Table, Column, Model, AutoIncrement, PrimaryKey, Length, NotNull } from "sequelize-typescript"

@Table(
  {
    timestamps: false,
    tableName: "highscores"
  }
)
export class Highscore extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number

  @NotNull
  @Column
  projectId: number
  
  @Length({ min: 3, max: 255 })
  @Column
  nickname: string

  @NotNull
  @Column
  score: number

  @Length({ max: 100 })
  @Column
  source: string
}
