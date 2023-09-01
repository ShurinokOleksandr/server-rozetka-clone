import { Column, Model, DataType, Default, Table, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";

@Table
export class CommentsModel extends Model {
    @Default(DataType.UUIDV4)
    @Default(DataType.NOW)
    @Column
    createdAt: Date;

    @Column
    updatedAt: Date;

    @Column
    text: string;

    @Column({
        primaryKey: true,
        autoIncrement: true,
    })
    id: number;

    @ForeignKey(() => CommentsModel)
    @Column
    parentId: number;

    @BelongsTo(() => CommentsModel, 'parentId')
    parent: CommentsModel;

    @HasMany(() => CommentsModel, 'parentId')
    children: CommentsModel[];

    @Column
    productId: string;
}



