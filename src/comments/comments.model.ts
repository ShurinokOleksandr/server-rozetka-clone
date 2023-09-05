import {
    Column,
    Model,
    DataType,
    Default,
    Table,
    ForeignKey,
    BelongsTo,
    HasMany,
    PrimaryKey, AutoIncrement
} from "sequelize-typescript";

@Table
export class CommentsModel extends Model {
    @PrimaryKey
    @Column(DataType.UUID)
    id: string;

    @Default(DataType.UUIDV4)
    @Default(DataType.NOW)
    @Column
    createdAt: Date;

    @Column
    updatedAt: Date;

    @Column(DataType.STRING)
    comment: string;

    @Column(DataType.INTEGER)
    postId: number;

    @ForeignKey(() => CommentsModel)
    @Column({
         allowNull: true,
     type: DataType.UUID
    })
    parentId: string | null;// чилдрена нету

    @BelongsTo(() => CommentsModel, 'parentId')
    parent: CommentsModel;

    @HasMany(() => CommentsModel, 'parentId')
    children: CommentsModel[];
}
// npx sequelize-cli model:generate --name Comment --attributes createdAt:Date,updatedAt:Date,comment:string,text:string,id:number,parentId:string,parent:string,children:string,postId:number




