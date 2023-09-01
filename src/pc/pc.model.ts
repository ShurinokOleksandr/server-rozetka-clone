import { Column, Model, Table } from "sequelize-typescript";


@Table
export class PcModel extends Model {

    @Column
        pc_manufactures: string

    @Column({defaultValue:0})
        price: number

    @Column
        parts_manufactures: string

    @Column
        vendor_code: string

    @Column
        name: string

    @Column
        description: string

    @Column
        images: string

    @Column({defaultValue:0})
        in_stock: number

    @Column({defaultValue:false})
        bestsellers: boolean

    @Column({defaultValue:false})
        new: boolean

    @Column
        popularity: number
    @Column
        compatibity:string

}
