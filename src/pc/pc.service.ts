import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { PcModel } from "./pc.model";
import { IBoilerPartsFilter, PcQueryProps } from "./types";
import { Op, Order } from "sequelize";
@Injectable()
export class PcService {
    constructor(@InjectModel(PcModel) private PcModelSequelize: typeof PcModel) {}

    async pagination( query: PcQueryProps ): Promise<{ count: number, rows: PcModel[] }> {

        const limit = +query.limit;
        const offset = +query.offset * 20;
        const filter:Partial<IBoilerPartsFilter> = {};
        console.log(query)
        const order:Order = query.sortBy === "popularity" ? [["popularity", 'DESC']]
            : query.sortBy === "new" ? [["new", 'DESC']]
                : query.sortBy === "cheap" ? [["price", 'ASC']]
                    : query.sortBy === "expensive" ? [["price", 'DESC']]
                        : null;

        if (query.priceFrom && query.priceTo) {
            filter.price = {
                [Op.between]: [+query.priceFrom, +query.priceTo],
            };
        }
        if (query.pc) {
            filter.pc_manufactures = query.pc.split(',');
        }

        if (query.parts) {
            filter.parts_manufactures =  query.parts.split(',');
        }

        return this.PcModelSequelize.findAndCountAll({
            limit,
            offset,
            where: filter,
            order:order,
        });

    }

    async findBestsellers({sortBy}:{sortBy:'popularity'}) :Promise<{ count: number, rows: Array<PcModel> }> {
        const order: Order = sortBy === "popularity" ? [["popularity", 'DESC']] : null;
        console.log(sortBy)
        return this.PcModelSequelize.findAndCountAll({
            where:{
                bestsellers:true
            },
            order:order
        })
    }
    async findBestsellersCount(count: number) :Promise<{ count: number, rows: Array<PcModel> }> {
        return this.PcModelSequelize.findAndCountAll({
            limit:+count,
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
    async findNewItemsCount(count:number) :Promise<{ count: number, rows: Array<PcModel> }> {
        return this.PcModelSequelize.findAndCountAll({
            limit:+count,
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

    async findItemByString(str:string,limit:number) :Promise<{ count: number, rows: Array<PcModel> }> {
        return this.PcModelSequelize.findAndCountAll({
            limit:limit | 16,
            where:{
                name:{[Op.like]: `%${str}%`}
            },
        })
    }
    async findItemsByManufactures() :Promise<{ count: number, rows: Array<PcModel> }> {
        return this.PcModelSequelize.findAndCountAll({
            where:{
                new:true
            }
        })
    }
}
