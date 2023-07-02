import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { PcModel } from "./pc.model";
import { PcQueryProps } from "./types";
import { Op } from 'sequelize'
@Injectable()
export class PcService {
    constructor(@InjectModel(PcModel) private PcModelSequelize: typeof PcModel) {}

    async pagination( query: PcQueryProps ): Promise<{ count: number, rows: PcModel[] }> {
        const limit = +query.limit;
        const offset = +query.offset * 20;


        return this.PcModelSequelize.findAndCountAll({
            limit,
            offset,
        })
    }

    async findBestsellers() :Promise<{ count: number, rows: Array<PcModel> }> {

        return this.PcModelSequelize.findAndCountAll({
            where:{
                bestsellers:true
            }
        })
    }

    async findNewItems() :Promise<{ count: number, rows: Array<PcModel> }> {
        return this.PcModelSequelize.findAndCountAll({
            where:{
                new:true
            }
        })
    }

    async findItemById(id:number | string) :Promise<PcModel> {
        return this.PcModelSequelize.findOne({
            where:{
                id
            }
        })
    }

    async findItemByName(name:string) :Promise<PcModel> {
        return this.PcModelSequelize.findOne({
            where:{
                name,
            }
        })
    }

    async findItemByString(str:string) :Promise<{ count: number, rows: Array<PcModel> }> {
        return this.PcModelSequelize.findAndCountAll({
            limit:20,
            where:{
                name:{[Op.like]: `%${str}%`}
            },
        })
    }
}
