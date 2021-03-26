import { Table, Column, Model, AutoIncrement, PrimaryKey, Length, NotNull, AllowNull } from "sequelize-typescript"

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

  @AllowNull(false)
  @Column
  projectId: number
  
  @Length({ min: 3, max: 255 })
  @Column
  nickname: string

  @AllowNull(false)
  @Column
  score: number

  @Length({ max: 100 })
  @Column
  source: string
}
